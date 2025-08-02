import { mediumConfig } from "./constants";
import {
  mediumResponseSchema,
  type MediumPost,
  type MediumResponse,
} from "./validations";

class ApiError extends Error {
  constructor(message: string, public status: number, public code?: string) {
    super(message);
    this.name = "ApiError";
  }
}

class ApiService {
  private static instance: ApiService;

  private constructor() {}

  public static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  private async fetchWithTimeout(
    url: string,
    options: RequestInit = {},
    timeout = 10000
  ): Promise<Response> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
      return response;
    } catch (error) {
      clearTimeout(timeoutId);
      if (error instanceof Error && error.name === "AbortError") {
        throw new ApiError("Request timeout", 408);
      }
      throw error;
    }
  }

  async fetchMediumPosts(): Promise<MediumPost[]> {
    try {
      const url = `${mediumConfig.rss2JsonUrl}?rss_url=${encodeURIComponent(
        mediumConfig.feedUrl
      )}`;

      const response = await this.fetchWithTimeout(url, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new ApiError(
          `Failed to fetch blog posts: ${response.statusText}`,
          response.status
        );
      }

      const data: MediumResponse = await response.json();

      // Validate response with Zod
      const validatedData = mediumResponseSchema.parse(data);

      if (validatedData.status !== "ok" || !validatedData.items) {
        throw new ApiError("Invalid response format", 500);
      }

      return validatedData.items;
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      console.error("Error fetching Medium posts:", error);
      throw new ApiError(
        "Failed to fetch blog posts",
        500,
        "MEDIUM_FETCH_ERROR"
      );
    }
  }

  async checkMediumFeedUpdate(): Promise<{
    hasChanged: boolean;
    etag?: string;
    lastModified?: string;
    lastBuildDate?: string;
  }> {
    try {
      const response = await this.fetchWithTimeout("/api/medium-feed", {
        cache: "no-store",
      });

      if (!response.ok) {
        throw new ApiError("Could not check Medium feed", response.status);
      }

      const data = await response.json();
      return {
        hasChanged: true,
        ...data,
      };
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      console.error("Error checking Medium feed:", error);
      throw new ApiError(
        "Failed to check Medium feed",
        500,
        "MEDIUM_CHECK_ERROR"
      );
    }
  }
}

export const apiService = ApiService.getInstance();
export { ApiError };
