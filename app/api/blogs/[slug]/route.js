import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

// GET SINGLE BLOG
export async function GET(req, { params }) {
  await connectDB();

  const { slug} = await params;

  const blog = await Blog.findOne( {slug});

  return NextResponse.json(blog);
}

// UPDATE BLOG
export async function PUT(req, { params }) {
  await connectDB();

  const { slug } = await params;

  const body = await req.json();

  const updatedBlog = await Blog.findByIdAndUpdate(
    {slug},
    body,
    {
      new: true,
    }
  );

  return NextResponse.json(updatedBlog);
}

// DELETE BLOG
export async function DELETE(req, { params }) {
  await connectDB();

  const { slug } = await params;

  await Blog.findByIdAndDelete({slug});

  return NextResponse.json({
    success: true,
    message: "Blog Deleted",
  });
}