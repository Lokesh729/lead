import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/blog";

export default async function BlogPage({ params }) {

  await connectDB();

  const blog = await Blog.findOne({
    slug: params.slug,
  });

  if (!blog) {
    return <h1>Blog Not Found</h1>;
  }

  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold">
        {blog.title}
      </h1>

      <p className="mt-5">
        {blog.content}
      </p>

    </div>
  );
}