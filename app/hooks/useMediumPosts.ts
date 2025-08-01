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

const fetchMediumPosts = async (): Promise<MediumPost[]> => {
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

  return data.items;
};

export const useMediumPosts = () => {
  return useQuery({
    queryKey: ["medium-posts"],
    queryFn: fetchMediumPosts,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    retry: 2,
    retryDelay: (attemptIndex: number) =>
      Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};
