import dbConnect from "../../db/dbConnect.js";
import blogModel from "../../db/models/blog.model.mjs";

export const getBlogs = async () => {
  try {
    await dbConnect();

    const Blogs = await blogModel.find({});

    return {
      status: "ok",
      message: "Blogs fetched successfully",
      data: Blogs,
    };
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return {
      status: "error",
      message: "An error occurred while fetching blogs",
      data: [],
      error: error.message,
    };
  }
};
