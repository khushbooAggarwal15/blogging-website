"use client";

import TipTap from "../components/tiptapEditor/tiptap";
import React, { useEffect } from "react";
import { useState } from "react";
// import parser from "html-react-parser";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import { useForm, Controller } from "react-hook-form";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_POST } from "../GraphqlApi/mutation";
import { InputField } from "./userblogs.styles";
import createApolloClient from "../GraphqlApi/apolloclient";
import { useRouter } from "next/navigation";
import {
  FormControl,
  FormControlLabel,
  Input,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";

function UserBlogsPage() {
  const router = useRouter();

  const { control, handleSubmit } = useForm();
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");

  const client = createApolloClient(
    "https://b357-115-240-127-98.ngrok-free.app/graphql"
  );

  const [addPost] = useMutation(ADD_POST, {
    client,
  });

  const onSubmit = async (data: any) => {
    try {
      console.log(
        "Post",
        data.title,
        desc,
        image,
        data.isTrending,
        data.shortDescription,
        data.tags
      );
      console.log(image);
      const result = await addPost({
        variables: {
          title: data.title,
          content: desc,
          image: image,
          istrending: data.isTrending === "true",
          shortDescription: data.shortDescription,
          tags: data.tags || [],
        },
      });

      console.log("After Mutation Call", result);
      const newPost = result.data.addPost;

      console.log("New post created:", newPost);

      router.push("/getblog");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <>
      <Header />
      <h1
        style={{
          width: "100%",
          textAlign: "center",
          padding: "4px",
          background: "beige",
          fontSize: "28px",
          fontWeight: "500",
        }}
      >
        Write Your Blog
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          gap: "8px",
          display: "flex",
          flexDirection: "column",
          margin: "1rem",
          // background: "beige",
          padding: "4rem",
          borderRadius: "34px",
          border: "6px solid black",
        }}
      >
        <Controller
          name="title"
          control={control}
          rules={{ required: "Title is required" }}
          render={({ field }) => (
            <InputField type="text" placeholder="Title" {...field} />
          )}
        />

        <br />

        <Controller
          name="tags"
          control={control}
          render={({ field }) => (
            <FormControl style={{ width: "100%", background: "white" }}>
              <InputLabel>Tags</InputLabel>
              <Select
                {...field}
                labelId="tags-label"
                id="tags"
                multiple
                label="Tags"
                value={field.value || []}
                onChange={(e) => field.onChange(e.target.value)}
              >
                <MenuItem value="Fitness">Fitness</MenuItem>
                <MenuItem value="Business">Business</MenuItem>
              </Select>
            </FormControl>
          )}
        />

        <br />

        <label>
          Trending:
          <Controller
            name="isTrending"
            control={control}
            render={({ field }) => (
              <RadioGroup
                {...field}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <FormControlLabel
                  value="true"
                  control={<Radio style={{ color: "black" }} />}
                  label=" True"
                />
                <FormControlLabel
                  value="false"
                  control={<Radio style={{ color: "black" }} />}
                  label="False"
                />
              </RadioGroup>
            )}
          />
        </label>

        <Controller
          name="shortDescription"
          control={control}
          render={({ field }) => (
            <InputField
              type="text"
              placeholder="Short Description"
              {...field}
            />
          )}
        />

        <label>
          <Controller
            name="content"
            control={control}
            render={({ field }) => (
              <TipTap setDesc={setDesc} setImage={setImage} {...field} />
            )}
          />
        </label>
        <br />

        <div
          style={{ width: "100%", textAlign: "center", marginBottom: "20px" }}
        >
          <button
            type="submit"
            style={{
              width: "20em",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#4b6bfb",
              color: "white",
              padding: "10px",
            }}
          >
            Preview
          </button>
        </div>
      </form>

      <Footer />
    </>
  );
}

export default UserBlogsPage;
