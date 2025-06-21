import Image from "next/image";
import { blogPosts } from "../constants/blogPosts";
import { motion } from "framer-motion";

// Mock blog data - replace with your actual blog data

const Blogs = () => {
  return (
    <div id="blogs" className="w-full px-[12%]  pb-10">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {blogPosts.map((post) => (
          <motion.article
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            key={post.id}
            className="border-[0.5px] border-gray-400 rounded-xl hover:bg-lightHover hover:-translate-y-1 hover:shadow-black duration-500 cursor-pointer overflow-hidden group"
          >
            <div className="relative overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover group-hover:scale-105 duration-500"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                  {post.category}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>

              <h3 className="font-semibold text-gray-700 mb-3 line-clamp-2 group-hover:text-gray-900 duration-300">
                {post.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {post.description}
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
  );
};

export default Blogs;
