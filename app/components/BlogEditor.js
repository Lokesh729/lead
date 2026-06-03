"use client";

import { useEditor, EditorContent }
from "@tiptap/react";

import StarterKit
from "@tiptap/starter-kit";

export default function BlogEditor({

  content,

  setContent,

}) {

  const editor = useEditor({

    extensions: [
      StarterKit,
    ],

    content,

    onUpdate({ editor }) {

      setContent(
        editor.getHTML()
      );
    },

  });

  return (

    <div className="border rounded p-5 bg-white text-black">

      <EditorContent
        editor={editor}
      />

    </div>
  );
}