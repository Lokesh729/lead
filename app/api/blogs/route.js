  import { connectDB } from "@/lib/mongodb";
  import Blog from "@/models/blog";
  import { NextResponse } from "next/server";

  import { writeFile } from "fs/promises";

  import path from "path";

  import { v4 as uuidv4 } from "uuid";


  // GET BLOGS
  export async function GET() {

    await connectDB();

    const blogs = await Blog.find();

    return NextResponse.json(blogs);
  }


  // ADD BLOG
  export async function POST(req) {

    try {

      await connectDB();

      // GET FORMDATA
      const formData =
        await req.formData();

      // TEXT DATA
      const title =
        formData.get("title");

      const slug =
        formData.get("slug");

      const metaTitle =
        formData.get("metaTitle");

      const metaDescription =
        formData.get(
          "metaDescription"
        );

      const content =
        formData.get("content");

      const schemaMarkup =
        formData.get(
          "schemaMarkup"
        );

      // IMAGE
      const image =
        formData.get("image");

      let imagePath = "";

      if (image) {

        // CONVERT IMAGE
        const bytes =
          await image.arrayBuffer();

        const buffer =
          Buffer.from(bytes);

        // UNIQUE NAME
        const filename =
          `${uuidv4()}-${image.name}`;

        // SAVE PATH
        const uploadPath =
          path.join(

            process.cwd(),

            "public/uploads",

            filename

          );

        // SAVE FILE
        await writeFile(
          uploadPath,
          buffer
        );

        // STORE URL
        imagePath =
          `/uploads/${filename}`;
      }

      // SAVE BLOG
      const blog = await Blog.create({

        title,
        slug,
        metaTitle,
        metaDescription,
        content,
        schemaMarkup,

        featuredImage:
          imagePath,

      });

      return NextResponse.json({

        success: true,

        blog,

      });

    } catch (error) {

      console.log(error);

      return NextResponse.json({

        success: false,

        message: error.message,

      });
    }
  } 