import { useState } from "react";
import { MessageCircle, ChevronDown, ChevronUp } from "lucide-react";

const CommentList = ({ comments = [] }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleComments = showAll ? comments : comments.slice(0, 2);

  if (comments.length === 0) {
    return (
      <div className="w-full bg-gray-800 p-4 rounded-xl text-gray-500 text-sm flex items-center gap-2">
        <MessageCircle className="w-4 h-4" />
        No comments yet.
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-800 p-4 rounded-xl space-y-4">
      {visibleComments.map((comment, index) => (
        <div
          key={index}
          className="bg-slate-800 p-3 rounded-md text-gray-300 text-sm shadow-sm"
        >
          <div className="font-semibold text-blue-400">
            {comment.author || "Anonymous"}
          </div>
          <div className="mt-1">{comment.text}</div>
          {comment.date && (
            <div className="mt-1 text-xs text-gray-500">{comment.date}</div>
          )}
        </div>
      ))}

      {comments.length > 2 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="flex items-center gap-1 text-blue-400 text-sm hover:underline"
        >
          {showAll ? "Show less" : "View all comments"}
          {showAll ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>
      )}
    </div>
  );
};

export default CommentList;
