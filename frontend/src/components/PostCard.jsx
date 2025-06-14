// src/components/PostCard.jsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LikeButton from "./LikeButton";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";
import LikedByList from "./LikedByList";

const comments = [
  {
    author: "Praveer",
    text: "This project looks really impressive. Great job!",
    date: "June 14, 2025",
  },
  {
    author: "Molu",
    text: "Clean UI and the comment section works great!",
    date: "June 13, 2025",
  },
  {
    author: "Shreya",
    text: "Can you share how you implemented the like button?",
    date: "June 12, 2025",
  },
  {
    author: "Anonymous",
    text: "Thanks for sharing this. Very useful.",
    date: "June 11, 2025",
  },
  {
    author: "Aman",
    text: "Would love to see a dark mode toggle too!",
    date: "June 10, 2025",
  },
];

const PostCard = ({ title, content, author, date }) => {
  return (
    <Card className="bg-gray-900 text-gray-300 rounded-2xl shadow-md">
      <CardHeader>
        <CardTitle className="text-lg text-white">{title}</CardTitle>
        <p className="text-sm text-gray-400">
          {author} • {date}
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm leading-relaxed text-gray-300">{content}</p>

        <div className="flex gap-4 pt-2">
          <div className="w-4/4">
            <div className="flex gap-3 items-center">
              <LikeButton />
              <LikedByList users={["Praveer", "Molu", "Shreya", "Aman"]} />
            </div>
            <div className="mt-4">
              <CommentList comments={comments} />
            </div>
            <div className="">
              <CommentBox />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PostCard;
