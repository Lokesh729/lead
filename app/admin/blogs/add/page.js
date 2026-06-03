"use client";

import { useState } from "react";
import BlogEditor
from "@/app/components/BlogEditor";
export default function AddBlogPage() {

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] =
    useState("");

  const [content, setContent] =
    useState("");

  const [schemaMarkup, setSchemaMarkup] =
    useState("");

  const [image, setImage] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

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


  // SUBMIT BLOG
  const handleSubmit = async () => {

    try {

      setLoading(true);

      // FORMDATA
      const formData =
        new FormData();

      formData.append(
        "title",
        title
      );

      formData.append(
        "slug",
        slug
      );

      formData.append(
        "metaTitle",
        metaTitle
      );

      formData.append(
        "metaDescription",
        metaDescription
      );

      formData.append(
        "content",
        content
      );

      formData.append(
        "schemaMarkup",
        schemaMarkup
      );

      // IMAGE
      if (image) {

        formData.append(
          "image",
          image
        );
      }

      // API CALL
      const res = await fetch(
        "/api/blogs",
        {

          method: "POST",

          body: formData,

        }
      );

      const data =
        await res.json();

      console.log(data);

      if (data.success) {

        alert(
          "Blog Published Successfully"
        );

        // RESET FORM
        setTitle("");
        setSlug("");
        setMetaTitle("");
        setMetaDescription("");
        setContent("");
        setSchemaMarkup("");
        setImage(null);

      } else {

        alert(data.message);
      }

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="p-5 md:p-10 bg-gray-100 min-h-screen">

      <div className="bg-white p-5 md:p-8 rounded-xl max-w-5xl mx-auto shadow">

        {/* HEADING */}
        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          Add Blog
        </h1>

        {/* TITLE */}
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={handleTitle}
          className="border p-3 w-full mb-5 rounded"
        />

        {/* SLUG */}
        <input
          type="text"
          placeholder="Slug"
          value={slug}
          readOnly
          className="border p-3 w-full mb-5 bg-gray-100 rounded"
        />

        {/* META TITLE */}
        <input
          type="text"
          placeholder="Meta Title (SEO)"
          value={metaTitle}
          onChange={(e) =>
            setMetaTitle(
              e.target.value
            )
          }
          className="border p-3 w-full mb-5 rounded"
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
          className="border p-3 w-full mb-5 h-28 rounded"
        />

        {/* IMAGE */}
        <div className="mb-5">

          <label className="block mb-2 font-medium">

            Featured Image

          </label>

          <input
            type="file"

            accept="image/*"

            onChange={(e) =>
              setImage(
                e.target.files[0]
              )
            }

            className="w-full border p-3 rounded"
          />

        </div>

        {/* IMAGE PREVIEW */}
        {image && (

          <img
            src={URL.createObjectURL(image)}
            alt="Preview"
            className="w-full md:w-80 h-56 object-cover rounded mb-5"
          />

        )}

        {/* CONTENT */}
        <BlogEditor
  content={content}
  setContent={setContent}
/>

        {/* SCHEMA */}
        <textarea
          placeholder="Schema Markup"
          value={schemaMarkup}
          onChange={(e) =>
            setSchemaMarkup(
              e.target.value
            )
          }
          className="border p-3 w-full mb-8 h-40 rounded"
        />

        {/* BUTTON */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full md:w-auto bg-blue-900 text-white px-8 py-3 rounded-lg"
        >
          {loading
            ? "Publishing..."
            : "Publish Blog"}
        </button>

      </div>
    </div>
  );
}