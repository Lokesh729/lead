async function getBlogs() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/blogs`,
    {
      cache: "no-store",
    }
  );

  return res.json();
}
export default async function BlogsPage() {

  const blogs = await getBlogs();

  return (
    <div className="bg-black min-h-screen p-6 md:p-10 md:mt-20 md:pl-40 ">

      {/* HEADING */}
      <h1 className="text-4xl md:text-5xl  text-white mb-10 md:pt-10">
      Welcome to Our Blog
      </h1>

      {/* BLOG GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8  md: pt-10 ">

        {blogs.map((blog) => (

<div
key={blog._id}
className="bg-[#111] rounded-xl overflow-hidden shadow-lg border border-gray-800 
w-[350px] h-[400px] transition-all duration-500 hover:-translate-y-3"
>
             
            {/* IMAGE */}
            <div className="overflow-hidden rounded-xl group">
  <img
    src={
      blog.featuredImage ||
      "https://via.placeholder.com/600x400"
    }
    alt={blog.title}
    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
  />
</div>
            {/* CONTENT */}
            <div className="p-6">

              {/* TITLE */}
              <h2 className=" text-white font-semibold leading-snug mb-4 line-clamp-2">

                {blog.title}

              </h2>

              {/* DESCRIPTION */}
                {/* <p className="text-gray-400 mb-6 line-clamp-3">

                {blog.metaDescription ||
                  blog.content}

              </p> */}

              {/* BUTTON */}
              <a
                href={`/blogs/${blog._id}`}
                className="block text-center bg-[#1a1a1a] hover:bg-[#222] transition-all duration-300 text-white py-4 rounded-lg"
              >
                Read More →
              </a>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}