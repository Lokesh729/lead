"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditBlogPage() {

  const params = useParams();

  const router = useRouter();

  const id = params.id;
  

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] =
    useState("");

  const [content, setContent] = useState("");

  const [loading, setLoading] =
    useState(false);

  // FETCH BLOG
  useEffect(() => {

    async function fetchBlog() {
          
       
      try {

        const res = await fetch(
          `/api/blogs/${id}`
        );

        const blog = await res.json();

        setTitle(blog.title || "");

        setSlug(blog.slug || "");

        setMetaTitle(
          blog.metaTitle || ""
        );

        setMetaDescription(
          blog.metaDescription || ""
        );

        setContent(
          blog.content || ""
        );

      } catch (error) {

        console.log(error);

      }
    }

    if (id) {
      fetchBlog();
    }

  }, [id]);


  // AUTO SLUG
  const handleTitle = (e) => {

    const value = e.target.value;

    setTitle(value);

    setSlug(
      value
        .toLowerCase()
        .trim()
        .replaceAll(" ", "-")
    );
  };


  // UPDATE BLOG
  const handleUpdate = async () => {

    try {

      setLoading(true);

      const res = await fetch(
        `/api/blogs/${id}`,
        {

          method: "PUT",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({

            title,
            slug,
            metaTitle,
            metaDescription,
            content,

          }),

        }
      );

      const data = await res.json();

      console.log(data);

      alert("Blog Updated Successfully");

      router.push("/admin/blogs");

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };


  // DELETE BLOG
  const handleDelete = async () => {

    const confirmDelete = confirm(
      "Are you sure you want to delete this blog?"
    );

    if (!confirmDelete) return;

    try {

      await fetch(
        `/api/blogs/${id}`,
        {

          method: "DELETE",

        }
      );

      alert("Blog Deleted");

      router.push("/admin/blogs");

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen">

      <div className="bg-white p-8 rounded-lg max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          Edit Blog
        </h1>

        {/* TITLE */}
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={handleTitle}
          className="border p-3 w-full mb-5"
        />

        {/* SLUG */}
        <input
          type="text"
          placeholder="Slug"
          value={slug}
          readOnly
          className="border p-3 w-full mb-5 bg-gray-100"
        />

        {/* META TITLE */}
        <input
          type="text"
          placeholder="Meta Title"
          value={metaTitle}
          onChange={(e) =>
            setMetaTitle(e.target.value)
          }
          className="border p-3 w-full mb-5"
        />

        {/* META DESCRIPTION */}
        <textarea
          placeholder="Meta Description"
          value={metaDescription}
          onChange={(e) =>
            setMetaDescription(
              e.target.value
            )
          }
          className="border p-3 w-full mb-5 h-28"
        />

        {/* CONTENT */}
        <textarea
          placeholder="Blog Content"
          value={content}
          onChange={(e) =>
            setContent(e.target.value)
          }
          className="border p-3 w-full mb-5 h-60"
        />

        {/* BUTTONS */}
        <div className="flex gap-4">

          <button
            onClick={handleUpdate}
            disabled={loading}
            className="bg-blue-900 text-white px-6 py-3 rounded"
          >
            {loading
              ? "Updating..."
              : "Update Blog"}
          </button>

          <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-6 py-3 rounded"
          >
            Delete Blog
          </button>

        </div>

      </div>
    </div>
  );
}