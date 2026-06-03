import { connectDB }
from "@/lib/mongodb";

import Blog
from "@/models/blog";

import { NextResponse }
from "next/server";


// GET SINGLE BLOG
export async function GET(
  req,
  { params }
) {

  await connectDB();

  const blog =
    await Blog.findById(
      params.id
    );

  return NextResponse.json(
    blog
  );
}


// UPDATE BLOG
export async function PUT(
  req,
  { params }
) {

  await connectDB();

  const body =
    await req.json();

  const updatedBlog =
    await Blog.findByIdAndUpdate(

      params.id,

      body,

      {
        new: true,
      }

    );

  return NextResponse.json(
    updatedBlog
  );
}


// DELETE BLOG
export async function DELETE(
  req,
  { params }
) {

  await connectDB();

  await Blog.findByIdAndDelete(
    params.id
  );

  return NextResponse.json({

    success: true,

    message:
      "Blog Deleted",

  });
}