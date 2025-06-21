import Image from "next/image";

// Mock blog data - replace with your actual blog data
const blogPosts = [
  {
    id: 1,
    title: "Building Modern React Applications with TypeScript",
    description:
      "Learn how to leverage TypeScript in React applications for better type safety and developer experience. This comprehensive guide covers best practices and common patterns.",
    image: "/placeholder.svg?height=200&width=300",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    category: "React",
    slug: "building-modern-react-typescript",
  },
  {
    id: 2,
    title: "Next.js App Router: Complete Guide",
    description:
      "Explore the powerful features of Next.js App Router including server components, streaming, and advanced routing patterns for modern web applications.",
    image: "/placeholder.svg?height=200&width=300",
    date: "Dec 10, 2024",
    readTime: "8 min read",
    category: "Next.js",
    slug: "nextjs-app-router-guide",
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox: When to Use What",
    description:
      "Understanding the differences between CSS Grid and Flexbox, and knowing when to use each layout method for optimal responsive design.",
    image: "/placeholder.svg?height=200&width=300",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    category: "CSS",
    slug: "css-grid-vs-flexbox",
  },
  {
    id: 4,
    title: "Performance Optimization in React",
    description:
      "Discover advanced techniques for optimizing React applications including code splitting, lazy loading, and performance monitoring strategies.",
    image: "/placeholder.svg?height=200&width=300",
    date: "Nov 28, 2024",
    readTime: "10 min read",
    category: "Performance",
    slug: "react-performance-optimization",
  },
  {
    id: 5,
    title: "Frontend Testing Best Practices",
    description:
      "A comprehensive guide to testing frontend applications with Jest, React Testing Library, and end-to-end testing strategies.",
    image: "/placeholder.svg?height=200&width=300",
    date: "Nov 20, 2024",
    readTime: "7 min read",
    category: "Testing",
    slug: "frontend-testing-best-practices",
  },
  {
    id: 6,
    title: "Web Accessibility: Building Inclusive UIs",
    description:
      "Learn how to create accessible web applications that work for everyone, including ARIA best practices and semantic HTML usage.",
    image: "/placeholder.svg?height=200&width=300",
    date: "Nov 15, 2024",
    readTime: "9 min read",
    category: "Accessibility",
    slug: "web-accessibility-inclusive-uis",
  },
];

const Blogs = () => {
  return (
    <div id="blogs" className="w-full px-[12%]  pb-10">
      <h4 className="text-center text-3xl font-ovo mb-2 font-semibold">
        My Blogs
      </h4>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Sharing insights, tutorials, and experiences from my journey as a
        frontend developer. Explore articles on React, Next.js, TypeScript, and
        modern web development practices.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {blogPosts.map((post) => (
          <article
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
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
