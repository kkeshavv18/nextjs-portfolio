import { mediumConfig } from "../constants";
import { mediumResponseSchema, type MediumPost } from "../validations";

export async function getMediumPosts(): Promise<MediumPost[]> {
  try {
    const url = `${mediumConfig.rss2JsonUrl}?rss_url=${encodeURIComponent(
      mediumConfig.feedUrl
    )}`;

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 300, // Revalidate every 5 minutes
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch blog posts: ${response.statusText}`);
    }

    const data = await response.json();

    // Validate response with Zod
    const validatedData = mediumResponseSchema?.parse(data);

    if (validatedData.status !== "ok" || !validatedData.items) {
      throw new Error("Invalid response format");
    }

    return validatedData.items;
  } catch (error) {
    console.error("Error fetching Medium posts:", error);
    return [];
  }
}

export async function getMediumPostsForHydration(): Promise<{
  posts: MediumPost[];
  timestamp: number;
}> {
  const posts = await getMediumPosts();
  return {
    posts,
    timestamp: Date.now(),
  };
}
