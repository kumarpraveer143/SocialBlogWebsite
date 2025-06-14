import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="bg-gray-900 text-gray-300">
      {/* Hero Section */}
      <section className="px-6 py-12 flex flex-col items-center text-center">
        <div className="max-w-3xl w-full space-y-6 mt-8">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-400">
            Welcome to pkBlogs
          </h1>
          <p className="text-lg md:text-xl text-gray-400">
            Dive into practical guides, coding tips, and personal insights from
            a developer’s journey. Whether you're a beginner or an experienced
            dev, you'll find something valuable here.
          </p>
          <p className="text-md text-gray-500">
            Built with ❤️ using React, TailwindCSS, and Vite. Curated and
            maintained by Praveer Kumar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <Link to="/blog">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg">
                Read Blogs
              </Button>
            </Link>
            <Link to="/about">
              <Button
                variant="ghost"
                className="hover:text-blue-400 text-gray-300"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gray-800 text-center">
        <h2 className="text-3xl font-semibold text-blue-400 mb-8">
          Why pkBlogs?
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-gray-700 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2 text-blue-300">
              Real-World Content
            </h3>
            <p className="text-gray-400">
              Learn from real development experiences — not just textbook
              examples. Our blogs are written by devs, for devs.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2 text-blue-300">
              Community Driven
            </h3>
            <p className="text-gray-400">
              We believe in learning together. Share your thoughts, suggest blog
              topics, or contribute your own!
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2 text-blue-300">
              Stay Updated with Blogs
            </h3>
            <p className="text-gray-400">
              Never miss an update! Get the latest posts on web development,
              career tips, project walkthroughs, and more — all in one place.
              Fresh content, always relevant.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter or CTA */}
      <section className="py-16 px-6 bg-gray-800 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl font-semibold text-blue-400">Stay Updated</h2>
          <p className="text-gray-400">
            Subscribe to get notified when a new blog is published. No spam,
            just valuable content.
          </p>
          <Link to="/contact">
            <Button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 text-white">
              Contact / Subscribe
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer Style Closing */}
      <footer className="py-10 text-center text-gray-600 text-sm">
        © 2025 pkBlogs · Built by Praveer Kumar · Crafted with React &
        TailwindCSS
      </footer>
    </div>
  );
};

export default Home;
