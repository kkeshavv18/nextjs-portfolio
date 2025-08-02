"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMediumPosts } from "@/hooks/use-medium-posts";
import {
  formatDate,
  extractReadTime,
  getCategoryFromTags,
  extractThumbnail,
} from "@/lib/utils";
import { type MediumPost } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import LoadingSpinner from "@/components/ui/loading-spinner";

const POSTS_PER_PAGE = 6;

export default function Blogs() {
  const { data: blogPosts, isLoading, error } = useMediumPosts();
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination logic
  const totalPosts = blogPosts?.length || 0;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = blogPosts?.slice(startIndex, endIndex) || [];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const blogsSection = document.getElementById("blogs");
    if (blogsSection) {
      blogsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isLoading) {
    return (
      <section id="blogs" className="w-full px-[12%] pb-10">
        <motion.h4
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center text-3xl font-ovo mb-2 font-semibold text-gray-900 dark:text-gray-100"
        >
          My Blogs
        </motion.h4>
        <div className="flex justify-center items-center h-64">
          <LoadingSpinner size="lg" />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="blogs" className="w-full px-[12%] pb-10">
        <motion.h4
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center text-3xl font-ovo mb-2 font-semibold text-gray-900 dark:text-gray-100"
        >
          My Blogs
        </motion.h4>
        <div className="text-center text-red-600 dark:text-red-400 py-10">
          <p>Unable to load blog posts. Please try again later.</p>
          <p className="text-sm mt-2">The system will automatically retry.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="blogs" className="w-full px-[12%] pb-10">
      <motion.h4
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center text-3xl font-ovo mb-2 font-semibold text-gray-900 dark:text-gray-100"
      >
        My Blogs
      </motion.h4>
      <motion.p
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
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
          <Button
            href="https://medium.com/@keshavkattel1998"
            target="_blank"
            rel="noopener noreferrer"
            variant="link"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline mt-2"
          >
            Visit my Medium profile
          </Button>
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
              <Button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                variant="outline"
                size="sm"
              >
                Previous
              </Button>

              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <Button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                    >
                      {page}
                    </Button>
                  )
                )}
              </div>

              <Button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                variant="outline"
                size="sm"
              >
                Next
              </Button>
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
    </section>
  );
}
