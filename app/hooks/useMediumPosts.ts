import { useQuery } from "@tanstack/react-query";

export interface MediumPost {
  title: string;
  link: string;
  thumbnail: string;
  description: string;
  pubDate: string;
  categories: string[];
  author: string;
}

interface MediumResponse {
  status: string;
  items: MediumPost[];
}

// Store cached data and last feed check
let cachedPosts: MediumPost[] | null = null;
let lastFeedCheck: string | null = null;

const checkMediumFeedUpdate = async (): Promise<boolean> => {
  try {
    // Use our API route to check Medium feed changes
    const response = await fetch("/api/medium-feed", {
      cache: "no-store",
    });

    if (!response.ok) {
      console.warn(
        "Could not check Medium feed, assuming it might have changed"
      );
      return true; // Assume it might have changed
    }

    const data = await response.json();

    if (data.error) {
      console.warn("API error:", data.error);
      return true; // Assume it might have changed
    }

    // Check for ETag or Last-Modified headers
    const etag = data.etag;
    const lastModified = data.lastModified;

    if (etag || lastModified) {
      const currentUpdate = etag || lastModified;
      if (lastFeedCheck !== currentUpdate) {
        lastFeedCheck = currentUpdate;
        console.log("Medium feed has changed, fetching fresh data");
        return true;
      }
      console.log("Medium feed hasn't changed, using cached data");
      return false;
    }

    // Check for lastBuildDate
    const lastBuildDate = data.lastBuildDate;

    if (lastBuildDate && lastFeedCheck !== lastBuildDate) {
      lastFeedCheck = lastBuildDate;
      console.log("Medium feed has changed, fetching fresh data");
      return true;
    }

    console.log("Medium feed hasn't changed, using cached data");
    return false;
  } catch (error) {
    console.warn("Error checking Medium feed update:", error);
    return true; // Assume it might have changed
  }
};

const fetchMediumPosts = async (): Promise<MediumPost[]> => {
  // First check if Medium feed has actually changed
  const hasChanged = await checkMediumFeedUpdate();

  // If feed hasn't changed and we have cached data, return it
  if (!hasChanged && cachedPosts) {
    console.log("Using cached posts, no new content on Medium");
    return cachedPosts;
  }

  // Only call RSS2JSON if feed has changed
  console.log("Fetching fresh data from RSS2JSON");
  const response = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@keshavkattel1998"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch blog posts");
  }

  const data: MediumResponse = await response.json();

  if (data.status !== "ok" || !data.items) {
    throw new Error("Invalid response format");
  }

  // Cache the fresh data
  cachedPosts = data.items;
  console.log(`Fetched ${data.items.length} posts from RSS2JSON`);

  return data.items;
};

export const useMediumPosts = () => {
  return useQuery({
    queryKey: ["medium-posts"],
    queryFn: fetchMediumPosts,
    staleTime: 60 * 1000, // 1 minute - check for updates frequently
    gcTime: 10 * 60 * 1000, // 10 minutes
    retry: 2,
    retryDelay: (attemptIndex: number) =>
      Math.min(1000 * 2 ** attemptIndex, 30000),
    refetchOnWindowFocus: true, // Refetch when user returns to the tab
    refetchOnMount: true, // Refetch when component mounts
  });
};
