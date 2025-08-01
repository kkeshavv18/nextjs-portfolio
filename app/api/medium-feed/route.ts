import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const mediumUsername = "@keshavkattel1998";
    const mediumFeedUrl = `https://medium.com/feed/${mediumUsername}`;

    // Check Medium RSS feed directly for changes
    const response = await fetch(mediumFeedUrl, {
      method: "HEAD",
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Could not check Medium feed" },
        { status: 500 }
      );
    }

    // Check for ETag or Last-Modified headers
    const etag = response.headers.get("etag");
    const lastModified = response.headers.get("last-modified");

    if (etag || lastModified) {
      return NextResponse.json({
        hasChanged: true, // We'll let the client handle caching
        etag,
        lastModified,
      });
    }

    // Fallback: check the actual RSS content for lastBuildDate
    const fullResponse = await fetch(mediumFeedUrl, { cache: "no-store" });

    if (!fullResponse.ok) {
      return NextResponse.json(
        { error: "Could not fetch Medium feed content" },
        { status: 500 }
      );
    }

    const rssText = await fullResponse.text();

    // Look for lastBuildDate or pubDate in the RSS feed
    const lastBuildMatch = rssText.match(
      /<lastBuildDate>(.*?)<\/lastBuildDate>/
    );
    const pubDateMatch = rssText.match(/<pubDate>(.*?)<\/pubDate>/);

    const currentBuildDate = lastBuildMatch?.[1] || pubDateMatch?.[1];

    return NextResponse.json({
      hasChanged: true, // We'll let the client handle caching
      lastBuildDate: currentBuildDate,
    });
  } catch (error) {
    console.error("Error checking Medium feed:", error);
    return NextResponse.json(
      { error: "Failed to check Medium feed" },
      { status: 500 }
    );
  }
}
