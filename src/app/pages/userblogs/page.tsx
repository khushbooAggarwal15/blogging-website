"use client";
import TipTap from "@/app/components/tiptapEditor/tiptap";
import React from "react";
import { useState } from "react";
import parser from "html-react-parser";

function UserBlogsPage() {
  const [desc, setDesc] = useState("");
  return (
    <>
      <h1>Write Your Blog</h1>
      <TipTap setDesc={setDesc} />
      <div className="tiptap">{parser(desc)}</div>
    </>
  );
}

export default UserBlogsPage;
