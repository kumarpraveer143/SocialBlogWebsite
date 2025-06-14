import Navbar from "./components/Navbar";
import Blog from "./pages/Blog";
import Home from "./pages/Home"; // fixed
import Contact from "./pages/Contact"; // fixed
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-gray-300 text-gray-300">
      {/* <Navbar />
      <div className="px-0 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 w-full max-w-screen-2xl mx-auto mt-3">
        <HomeBlog
          title="How to Build a Fullstack App with Vite"
          content="In this guide, we'll explore how to set up a modern frontend using Vite, React, and TailwindCSS, along with a powerful backend using Node.js or Spring Boot..."
          author="Praveer"
          date="June 14, 2025"
        />
      </div> */}
      <div className="min-h-screen bg-gray-900 text-gray-300">
        <Navbar />
        <main className="max-w-5xl mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
