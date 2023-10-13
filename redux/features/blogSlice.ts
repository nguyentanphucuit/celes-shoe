import { listBlogs } from "@/constants";
import { BlogProps } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const items = [...listBlogs];

const BlogSlice = createSlice({
  name: "blog",
  initialState: {
    items: items.map((item) => ({
      ...item,
      slug: item.title.toLowerCase().replace(/ /g, "-"),
    })),
  },
  reducers: {
    getBlog: (state, action) => {
      return state;
    },
    updateBlog: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { getBlog, updateBlog } = BlogSlice.actions;
export default BlogSlice.reducer;
