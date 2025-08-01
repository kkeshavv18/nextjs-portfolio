"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMediumPosts, type MediumPost } from "../hooks/useMediumPosts";

const Blogs = () => {
  const {
    data: blogPosts,
    isLoading,
    error,
    refetch,
    isRefetching,
  } = useMediumPosts();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const extractReadTime = (description: string) => {
    // Try to extract read time from description or estimate based on content length
    const wordCount = description.split(" ").length;
    const estimatedMinutes = Math.ceil(wordCount / 200); // Average reading speed
    return `${estimatedMinutes} min read`;
  };

  const getCategoryFromTags = (categories: string[]) => {
    if (categories && categories.length > 0) {
      return categories[0];
    }
    return "General";
  };

  const extractThumbnail = (
    description: string,
    fallbackThumbnail?: string
  ) => {
    // First try to extract image from description using regex
    const imgMatch = description.match(/<img[^>]+src="([^">]+)"/);
    if (imgMatch && imgMatch[1]) {
      return imgMatch[1];
    }

    // Fallback to the provided thumbnail
    if (fallbackThumbnail) {
      return fallbackThumbnail;
    }

    // Final fallback to default image
    return "/work-1.png";
  };

  if (isLoading) {
    return (
      <div id="blogs" className="w-full px-[12%] pb-10">
        <motion.h4
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          className="text-center text-3xl font-ovo mb-2 font-semibold"
        >
          My Blogs
        </motion.h4>
        <div className="flex justify-center items-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading your blog posts...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div id="blogs" className="w-full px-[12%] pb-10">
        <motion.h4
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          className="text-center text-3xl font-ovo mb-2 font-semibold"
        >
          My Blogs
        </motion.h4>
        <div className="text-center text-red-600 py-10">
          <p>Unable to load blog posts. Please try again later.</p>
          <p className="text-sm mt-2">{error.message}</p>
          <button
            onClick={() => refetch()}
            disabled={isRefetching}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isRefetching ? "Refreshing..." : "Try Again"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div id="blogs" className="w-full px-[12%] pb-10">
      <motion.h4
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
        }}
        className="text-center text-3xl font-ovo mb-2 font-semibold"
      >
        My Blogs
      </motion.h4>
      <motion.p
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.7,
        }}
        className="text-center text-gray-600 mb-10 max-w-2xl mx-auto"
      >
        Sharing insights, tutorials, and experiences from my journey as a
        frontend developer. Explore articles on React, Next.js, TypeScript, and
        modern web development practices.
      </motion.p>

      {!blogPosts || blogPosts.length === 0 ? (
        <div className="text-center text-gray-600 py-10">
          <p>
            No blog posts found. Check out my Medium profile for the latest
            articles!
          </p>
          <a
            href="https://medium.com/@keshavkattel1998"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline mt-2 inline-block"
          >
            Visit my Medium profile
          </a>
        </div>
      ) : (
        <div>
          {isRefetching && (
            <div className="text-center mb-4">
              <p className="text-sm text-gray-500">Refreshing blog posts...</p>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
            {blogPosts.map((post: MediumPost, index: number) => (
              <motion.article
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                key={post.link}
                className="border-[0.5px] border-gray-400 rounded-xl hover:bg-lightHover hover:-translate-y-1 hover:shadow-black duration-500 cursor-pointer overflow-hidden group"
                onClick={() =>
                  window.open(post.link, "_blank", "noopener,noreferrer")
                }
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={extractThumbnail(post.description, post.thumbnail)}
                    alt={post.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                      {getCategoryFromTags(post.categories)}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span>{formatDate(post.pubDate)}</span>
                    <span>•</span>
                    <span>{extractReadTime(post.description)}</span>
                  </div>

                  <h3 className="font-semibold text-gray-700 mb-3 line-clamp-2 group-hover:text-gray-900 duration-300">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.description.replace(/<[^>]*>/g, "")}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 duration-300">
                      Read More →
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;
