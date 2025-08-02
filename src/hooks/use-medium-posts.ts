import { useQuery } from "@tanstack/react-query";
import { apiService } from "@/lib/api";
import { type MediumPost } from "@/lib/validations";

// Cache for storing posts and last feed check
let cachedPosts: MediumPost[] | null = null;
let lastFeedCheck: string | null = null;

const checkMediumFeedUpdate = async (): Promise<boolean> => {
  try {
    const data = await apiService.checkMediumFeedUpdate();

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
        lastFeedCheck = currentUpdate || null;
        return true;
      }
      return false;
    }

    // Check for lastBuildDate
    const lastBuildDate = data.lastBuildDate;

    if (lastBuildDate && lastFeedCheck !== lastBuildDate) {
      lastFeedCheck = lastBuildDate || null;
      return true;
    }

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
    return cachedPosts;
  }

  // Only call API if feed has changed
  const posts = await apiService.fetchMediumPosts();

  // Cache the fresh data
  cachedPosts = posts;

  return posts;
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
    refetchOnWindowFocus: true,
    refetchOnMount: true,
  });
};
