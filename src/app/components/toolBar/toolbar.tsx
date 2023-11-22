import React, { useCallback } from "react";
import {
  FaBold,
  FaItalic,
  FaStrikethrough,
  FaUndo,
  FaRedo,
  FaHeading,
  FaListOl,
  FaListUl,
  FaQuoteLeft,
  FaUnderline,
  FaImage,
} from "react-icons/fa";
import { Cloudinary } from "@cloudinary/url-gen";

const ToolBar = ({ editor, setImage }: any) => {
  const addImage = useCallback(async () => {
    const cloudName = "dffjofsgv";
    const uploadPreset = "my-uploads";

    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.style.display = "none";

    document.body.appendChild(fileInput);

    fileInput.click();

    fileInput.addEventListener("change", async () => {
      const file = fileInput.files?.[0];

      if (file) {
        try {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", uploadPreset);

          const cloudinaryResponse = await fetch(
            `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
            {
              method: "POST",
              body: formData,
            }
          );

          if (cloudinaryResponse.ok) {
            const cloudinaryResult = await cloudinaryResponse.json();
            setImage(cloudinaryResult.secure_url);
            editor
              .chain()
              .focus()
              .setImage({ src: cloudinaryResult.secure_url })
              .run();
            console.log("Cloudinary File URL:", cloudinaryResult.secure_url);
          } else {
            console.error(
              "Error uploading image to Cloudinary:",
              cloudinaryResponse.statusText
            );
          }
        } catch (error) {
          console.error("Error uploading image to Cloudinary:", error);
        }
      }

      document.body.removeChild(fileInput);
    });
  }, [setImage]);

  return (
    <div className="toolbar">
      <div>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "is-active" : ""}
        >
          <FaBold />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is-active" : ""}
        >
          <FaItalic />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "is-active" : ""}
        >
          <FaStrikethrough />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={editor.isActive("underline") ? "is-active" : ""}
        >
          <FaUnderline />
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive("heading", { level: 1 }) ? "is-active" : ""
          }
        >
          <FaHeading />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "is-active" : ""}
        >
          <FaListUl />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive("orderedList") ? "is-active" : ""}
        >
          <FaListOl />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive("blockquote") ? "is-active" : ""}
        >
          <FaQuoteLeft />
        </button>
        <button onClick={addImage}>
          <FaImage />
        </button>
      </div>
      <div>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
        >
          <FaUndo />
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
        >
          <FaRedo />
        </button>
      </div>
    </div>
  );
};

export default ToolBar;
