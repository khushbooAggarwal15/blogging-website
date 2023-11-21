"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Document from "@tiptap/extension-document";
import Underline from "@tiptap/extension-underline";
import ToolBar from "../toolBar/toolbar";
import React from "react";

const TipTap = ({ setDesc, setImage }: any) => {
  const editor = useEditor({
    extensions: [Document, Image, StarterKit, Underline],

    content: "",
    onUpdate: ({ editor }) => {
      const html = editor.getText();
      setDesc(html);
    },
  });

  if (!editor) {
    return <div>Loading editor...</div>;
  }
  return (
    <div className="text-editor">
      <ToolBar editor={editor} setImage={setImage} />

      <EditorContent editor={editor} />
    </div>
  );
};
export default TipTap;
