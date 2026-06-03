import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

// GET ALL BLOGS
export async function GET() {

  try {

    await connectDB();

    const blogs = await Blog.find().sort({
      createdAt: -1,
    });

    return NextResponse.json({
      success: true,
      blogs,
    });

  } catch (error) {

    return NextResponse.json({
      success: false,
      message: error.message,
    });

  }
}

// CREATE BLOG
export async function POST(req) {

  try {

    await connectDB();

    const body = await req.json();

    const blog = await Blog.create({
      title: body.title,
      slug: body.slug,
      content: body.content,
    });

    return NextResponse.json({
      success: true,
      message: "Blog Created Successfully",
      blog,
    });

  } catch (error) {

    return NextResponse.json({
      success: false,
      message: error.message,
    });

  }
}