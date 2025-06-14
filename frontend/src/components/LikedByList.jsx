import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Users2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const LikedByList = ({ users = [] }) => {
  if (users.length === 0) return null;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center space-x-2 rounded-xl px-4 py-2 transition-colors shadow-sm bg-gray-800 text-gray-300 hover:bg-gray-700"
        >
          <Users2 className="w-4 h-4" />
          <span>Liked by {users.length}</span>
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-64 bg-gray-900 text-gray-300 border border-gray-700 rounded-xl p-4 space-y-2">
        <div className="text-sm font-semibold text-blue-400">Liked By:</div>

        {/* 👇 Scrollable list container */}
        <div className="max-h-40 overflow-y-auto custom-scrollbar pr-1">
          <ul className="space-y-1">
            {users.map((user, index) => (
              <li
                key={index}
                className="bg-slate-800 p-2 rounded text-sm text-gray-200"
              >
                {user}
              </li>
            ))}
          </ul>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default LikedByList;
