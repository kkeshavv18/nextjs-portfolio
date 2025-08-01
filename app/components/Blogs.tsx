"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { useMediumPosts, type MediumPost } from "../hooks/useMediumPosts";

const Blogs = () => {
  const { data: blogPosts, isLoading, error } = useMediumPosts();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; // Show 6 posts per page

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

  // Pagination logic
  const totalPosts = blogPosts?.length || 0;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = blogPosts?.slice(startIndex, endIndex) || [];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of blogs section
    const blogsSection = document.getElementById("blogs");
    if (blogsSection) {
      blogsSection.scrollIntoView({ behavior: "smooth" });
    }
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
          className="text-center text-3xl font-ovo mb-2 font-semibold text-gray-900 dark:text-gray-100"
        >
          My Blogs
        </motion.h4>
        <div className="flex justify-center items-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-gray-100 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">
              Loading your blog posts...
            </p>
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
          className="text-center text-3xl font-ovo mb-2 font-semibold text-gray-900 dark:text-gray-100"
        >
          My Blogs
        </motion.h4>
        <div className="text-center text-red-600 dark:text-red-400 py-10">
          <p>Unable to load blog posts. Please try again later.</p>
          <p className="text-sm mt-2">{error.message}</p>
          <p className="text-sm mt-2">The system will automatically retry.</p>
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
        className="text-center text-3xl font-ovo mb-2 font-semibold text-gray-900 dark:text-gray-100"
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
        className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto"
      >
        Sharing insights, tutorials, and experiences from my journey as a
        frontend developer. Explore articles on React, Next.js, TypeScript, and
        modern web development practices.
      </motion.p>

      {!blogPosts || blogPosts.length === 0 ? (
        <div className="text-center text-gray-600 dark:text-gray-400 py-10">
          <p>
            No blog posts found. Check out my Medium profile for the latest
            articles!
          </p>
          <a
            href="https://medium.com/@keshavkattel1998"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline mt-2 inline-block"
          >
            Visit my Medium profile
          </a>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
            {currentPosts.map((post: MediumPost, index: number) => (
              <motion.article
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                key={post.link}
                className="border-[0.5px] border-gray-400 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-gray-600/20 duration-500 cursor-pointer overflow-hidden group bg-white dark:bg-gray-800"
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
                    <span className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600">
                      {getCategoryFromTags(post.categories)}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
                    <span>{formatDate(post.pubDate)}</span>
                    <span>•</span>
                    <span>{extractReadTime(post.description)}</span>
                  </div>

                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 line-clamp-2 group-hover:text-gray-900 dark:group-hover:text-white duration-300">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {post.description.replace(/<[^>]*>/g, "")}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 duration-300">
                      Read More →
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex justify-center items-center gap-2 mt-8"
            >
              {/* Previous Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-800 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Previous
              </button>

              {/* Page Numbers */}
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        currentPage === page
                          ? "bg-blue-600 text-white"
                          : "text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-800 dark:hover:text-white"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}
              </div>

              {/* Next Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-800 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next
              </button>
            </motion.div>
          )}

          {/* Posts Info */}
          {totalPosts > 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4"
            >
              Showing {startIndex + 1} to {Math.min(endIndex, totalPosts)} of{" "}
              {totalPosts} posts
            </motion.p>
          )}
        </>
      )}
    </div>
  );
};

export default Blogs;
