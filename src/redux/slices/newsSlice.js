import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async ({ currentPage }) => {
    try {
      const startIndex = (currentPage - 1) * 10;
      const { data } = await axios.get(
        "https://dummyjson.com/posts?limit=10&skip=0",
        {
          params: {
            startIndex,
          },
        },
      );
      return data;
    } catch (error) {
      throw error;
    }
  },
);

const initialState = {
  news: [],
  status: "loading",
  error: null,
  currentPage: 1,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = "success";
        if (state.news.length > 0) {
          state.news.push(...action.payload.posts);
        } else {
          state.news = action.payload.posts || [];
        }
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
