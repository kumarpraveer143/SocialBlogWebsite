import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-gray-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between h-16">
        <div className="text-xl font-bold text-blue-400 tracking-wide">
          <Link to="/">pkBlogs</Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center text-sm font-medium">
          <Link to="/" className="hover:text-blue-400 transition-colors">
            Home
          </Link>
          <Link to="/blog" className="hover:text-blue-400 transition-colors">
            Blogs
          </Link>
          <Link to="/about" className="hover:text-blue-400 transition-colors">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-400 transition-colors">
            Contact
          </Link>
          <Button asChild className="ml-4">
            <Link to="/login">Login</Link>
          </Button>
        </nav>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-300 hover:bg-gray-700"
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 px-4 pb-4 space-y-2">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block text-sm hover:text-blue-400"
          >
            Home
          </Link>
          <Link
            to="/blog"
            onClick={() => setMenuOpen(false)}
            className="block text-sm hover:text-blue-400"
          >
            Blogs
          </Link>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="block text-sm hover:text-blue-400"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block text-sm hover:text-blue-400"
          >
            Contact
          </Link>
          <Button asChild className="w-full mt-2">
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              Login
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
