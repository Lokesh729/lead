async function getBlog(id) {

    const res = await fetch(
  
       `${process.env.NEXT_PUBLIC_SITE_URL}/api/blogs/${id}`,
  
      {
        cache: "no-store",
      }
  
    );
  
    return res.json();
  }
  
  
  // RELATED BLOGS
  async function getBlogs() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/blogs`, {
      cache: "no-store",
    });
  
    return res.json();
  }
  
  export default async function SingleBlogPage({
  
    params,
  
  }) {
  
    const id =
      params.id;
    
    
    const blog =
      await getBlog(id);
      console.log("BLOG DATA:", blog);
      if (!blog) {
        notFound();
      }
    const blogs =
      await getBlogs();
  
    return (
  
      <div className="bg-black min-h-screen text-white px-4 md:px-11 py-10 md:mt-25  md:pt-10 md:pl-35 md:pr-29">
  
        <div className="grid grid-cols-1 lg:grid-cols-[65%_34%] gap-6 ">
  
          {/* LEFT CONTENT */}
          <div className="lg:col-span-1">
  
            {/* FEATURED IMAGE */}
            <img
             src={blog?.featuredImage}
              alt={blog.title}
              className="w-full rounded-xl mb-8 object-cover"
            />
  
            {/* TITLE */}
            <h1 className="text-2xl md:text-xl font-bold leading-tight mb-6">
  
              {blog.title}
  
            </h1>
  
            {/* META DESCRIPTION */}
            <p className="text-gray-300 text-lg leading-8 mb-8">
  
              {blog.metaDescription}
  
            </p>
  
            {/* CONTENT */}
            <div
  dangerouslySetInnerHTML={{

    __html:
      blog.content
        .replaceAll("&lt;", "<")
        .replaceAll("&gt;", ">"),

  }}    
/>
  
          </div>
  
          {/* SIDEBAR */}
          <div className="lg:col-span-1">
  
            <div className="bg-[#111] p-5 rounded-xl sticky top-5">
  
              <h2 className="text-3xl  mb-6">
  
                Related Blogs
  
              </h2>
  
              <div className="space-y-6">
  
                {blogs
  
                  .filter(
  
                    (item) =>
                      item._id !== blog._id
  
                  )
  
                  .slice(0, 4)
  
                  .map((item) => (
  
                    <a
                      key={item._id}
  
                     href={`/blogs/${item._id}`}
  
                      className="block"
                    >
  
                      {/* IMAGE */}
                      <img
                        src={item.featuredImage}
                        alt={item.title}
                        className="w-full h-44 object-cover rounded-lg mb-3"
                      />
  
                      {/* TITLE */}
                      <h3 className="text-xl text-gray-200 leading-7 hover:text-white transition-all duration-300">
  
                        {item.title}
  
                      </h3>
  
                    </a>
  
                ))}
  
              </div>
  
            </div>
  
          </div>
  
        </div>
  
      </div>
    );
  }