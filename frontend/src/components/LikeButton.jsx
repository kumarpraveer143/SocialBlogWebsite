import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, HeartIcon } from "lucide-react";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked((prev) => !prev);
  };

  return (
    <Button
      variant="ghost"
      onClick={toggleLike}
      className={`flex items-center space-x-2 rounded-xl px-4 py-2 transition-colors shadow-sm
        ${liked 
          ? "bg-slate-800 text-blue-400 hover:bg-slate-700" 
          : "bg-gray-800 text-gray-300 hover:bg-gray-700"
        }`}
    >
      {liked ? <Heart fill="currentColor" className="w-4 h-4" /> : <HeartIcon className="w-4 h-4" />}
      <span>{liked ? "Liked" : "Like"}</span>
    </Button>
  );
};

export default LikeButton;
