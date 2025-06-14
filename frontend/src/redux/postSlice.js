import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.unshift({
        id: nanoid(),
        text: action.payload.text,
        author: action.payload.author,
        likes: 0,
        comments: [],
      });
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    likePost: (state, action) => {
      const post = state.posts.find((post) => post.id === action.payload);
      if (post) post.likes += 1;
    },
    addComment: (state, action) => {
      const { postId, text, author } = action.payload;
      const post = state.posts.find((post) => post.id === postId);
      if (post) {
        post.comments.push({
          id: nanoid(),
          text,
          author,
        });
      }
    },
    deleteComment: (state, action) => {
      const { postId, commentId } = action.payload;
      const post = state.posts.find((post) => post.id === postId);
      if (post) {
        post.comments = post.comments.filter((c) => c.id !== commentId);
      }
    },
  },
});

export const { addPost, deletePost, likePost, addComment, deleteComment } =
  postsSlice.actions;

export default postsSlice.reducer;
