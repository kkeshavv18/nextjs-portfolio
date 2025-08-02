import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function extractReadTime(description: string): string {
  const wordCount = description.split(" ").length;
  const estimatedMinutes = Math.ceil(wordCount / 200);
  return `${estimatedMinutes} min read`;
}

export function getCategoryFromTags(categories: string[]): string {
  if (categories && categories.length > 0) {
    return categories[0];
  }
  return "General";
}

export function extractThumbnail(
  description: string,
  fallbackThumbnail?: string
): string {
  const imgMatch = description.match(/<img[^>]+src="([^">]+)"/);
  if (imgMatch && imgMatch[1]) {
    return imgMatch[1];
  }
  return fallbackThumbnail || "/work-1.png";
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

import { siteConfig } from "./constants";

export function generateMetadata(title: string, description?: string) {
  return {
    title: `${title} | ${siteConfig.name}`,
    description: description || siteConfig.description,
  };
}
