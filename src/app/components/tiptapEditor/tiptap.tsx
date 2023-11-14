"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import Underline from "@tiptap/extension-underline";
import ToolBar from "../toolBar/toolbar";

const TipTap = ({ setDesc }: any) => {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: "",
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setDesc(html);
    },
  });
  if (!editor) {
    return <div>Loading editor...</div>;
  }
  return (
    <div className="text-editor">
      <ToolBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};
export default TipTap;
