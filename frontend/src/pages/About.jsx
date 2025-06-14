import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Instagram, Linkedin, MessageSquare } from "lucide-react";
import meImage from "../assets/praveer.jpg";

const About = () => {
  return (
    <div className="min-h-screen text-gray-100 flex items-center justify-center px-4 py-16">
      <Card className="w-full max-w-3xl bg-gray-900 border border-gray-800 rounded-2xl shadow-lg text-center">
        <CardHeader className="flex flex-col items-center space-y-4">
          <img
            src={meImage}
            alt="Praveer"
            className="w-40 h-40 rounded-full object-cover border-4 border-blue-400 shadow-lg"
          />
          <CardTitle className="text-3xl font-bold text-blue-400">
            Praveer Kumar
          </CardTitle>
          <p className="text-gray-400 text-sm">Creator of pkBlogs</p>

          {/* Social Links */}
          <div className="flex gap-4 mt-2">
            <a
              href="https://instagram.com/kumarpraveeer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/praveerdeveloper"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/918252965226"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-500 transition-colors"
            >
              <MessageSquare className="w-6 h-6" />
            </a>
          </div>
        </CardHeader>

        <CardContent className="text-gray-300 leading-relaxed space-y-4 text-sm md:text-base text-left">
          <p>
            Hello! I'm Praveer 👋 — an MCA student at NIT Bhopal and a
            passionate full-stack developer. I created <strong>pkBlogs</strong>{" "}
            to give users a clean, interactive space to write and share
            thoughts.
          </p>
          <p>
            This platform is built using the MERN stack (MongoDB, Express,
            React, Node.js) and styled with modern components from Shadcn/UI. My
            focus is on simplicity, responsiveness, and collaboration.
          </p>
          <p>
            I'm continuously learning, helping peers, and building tools that
            solve real-world problems. Let's connect!
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
