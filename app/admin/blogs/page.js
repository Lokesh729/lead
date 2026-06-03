"use client";

import { useEffect, useState } from "react";

export default function AdminBlogsPage() {

  const [blogs, setBlogs] =
    useState([]);

  // FETCH BLOGS
  useEffect(() => {

    async function fetchBlogs() {

      const res = await fetch(
        "/api/blogs"
      );

      const data =
        await res.json();

      setBlogs(data);
    }

    fetchBlogs();

  }, []);


  // DELETE BLOG
  const deleteBlog =
    async (id) => {

      const confirmDelete =
        confirm(
          "Delete this blog?"
        );

      if (!confirmDelete)
        return;

      await fetch(
        `/api/blogs/${id}`,
        {

          method: "DELETE",

        }
      );

      setBlogs(

        blogs.filter(

          (blog) =>
            blog._id !== id

        )

      );
    };

  return (

    <div className="p-10 bg-gray-100 min-h-screen md:mt-50">

      {/* TOP BAR */}
      <div className="flex items-center justify-between mb-10">

        <h1 className="text-4xl font-bold">
          Admin Dashboard
        </h1>

        <a
          href="/admin/blogs/add"
          className="bg-blue-900 text-white px-5 py-3 rounded"
        >
          Add Blog
        </a>

      </div>

      {/* BLOGS */}
      <div className="space-y-5">

        {blogs.map((blog) => (

          <div
            key={blog._id}
            className="bg-white p-5 rounded shadow flex flex-col md:flex-row md:items-center md:justify-between gap-5"
          >

            <div>

              <h2 className="text-2xl font-bold">
                {blog.title}
              </h2>

              <p className="text-gray-500">
                {blog.slug}
              </p>

            </div>

            {/* BUTTONS */}
            <div className="flex gap-3">

              {/* EDIT */}
              <a
                href={`/admin/edit/${blog._id}`}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Edit
              </a>

              {/* DELETE */}
              <button
                onClick={() =>
                  deleteBlog(blog._id)
                }
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}