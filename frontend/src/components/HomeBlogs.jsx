import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import LikedByList from "./LikedByList";

const HomeBlog = ({ id, title, content, author, date }) => {
  return (
    <div className="bg-gray-800 text-gray-300 rounded-xl shadow-md p-6 space-y-3">
      <h2 className="text-xl font-semibold text-blue-400 flex items-center gap-2">
        <BookOpen className="w-6 h-6 text-blue-300" />
        {title}
      </h2>

      <p className="text-sm text-gray-400 line-clamp-3">{content}</p>

      <div className="flex justify-between items-center text-xs text-gray-500">
        <span>By {author || "Anonymous"}</span>
        <span>{date}</span>
      </div>

      {/* 📱 Responsive row with Like + Read More */}
      <div className="pt-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <div className="order-1 sm:order-none">
          <LikedByList
            users={[
              "Praveer",
              "Molu",
              "Shreya",
              "Aman",
              "Rohit",
              "Ananya",
              "Tanya",
              "Aditya",
              "Neha",
              "Vikram",
              "Saanvi",
              "Divyansh",
              "Ishita",
              "Aryan",
              "Megha",
              "Nikhil",
              "Sneha",
              "Harsh",
              "Rehan",
              "Kavya",
            ]}
          />
        </div>

        <div className="order-2 sm:order-none">
          <Link to={`/blog/${id}`}>
            <Button
              variant="ghost"
              className="text-blue-400 hover:text-blue-300 bg-slate-800 hover:bg-slate-700 rounded-lg"
            >
              Read More
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeBlog;
