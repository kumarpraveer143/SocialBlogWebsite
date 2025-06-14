import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const CommentBox = ({ onPost }) => {
  const [comment, setComment] = useState("");

  const handlePost = () => {
    if (comment.trim()) {
      onPost?.(comment);
      setComment("");
    }
  };

  return (
    <div className="w-full bg-gray-800 p-4 rounded-xl shadow-sm space-y-3">
      <Textarea
        className="w-full bg-slate-800 text-gray-300 placeholder:text-gray-500 focus-visible:ring-1 focus-visible:ring-blue-500"
        placeholder="Write a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <div className="flex justify-end">
        <Button
          onClick={handlePost}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2"
        >
          Post
        </Button>
      </div>
    </div>
  );
};

export default CommentBox;
