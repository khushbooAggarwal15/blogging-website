// "use client";

// import TipTap from "../components/tiptapEditor/tiptap";
// import React from "react";
// import { useState } from "react";
// import parser from "html-react-parser";
// import Header from "../components/Header/header";
// import Footer from "../components/Footer/footer";
// import { useForm, Controller } from "react-hook-form";
// import { useMutation } from "@apollo/client";
// import { Add_Post } from "../GraphqlApi/mutation";
// import createApolloClient from "../GraphqlApi/apolloclient";
// import { useRouter } from "next/navigation";

// function UserBlogsPage() {
//   const client = createApolloClient(
//     "https://1a87-103-179-9-163.ngrok-free.app/graphql"
//   );

//   const [addPost] = useMutation(Add_Post, { client });

//   const { control, handleSubmit } = useForm();

//   const [desc, setDesc] = useState("");
//   const route = useRouter();

//   const onSubmit = async (data: any) => {
//     try {
//       console.log("Post", data.title, desc);
//       const result = await addPost({
//         variables: { title: data.title, content: parser(desc) },
//       });
//       console.log("New post created:", result.data.createPost);
//     } catch (error) {
//       // console.error("Error creating post:");
//     }
//   };

//   const handleClick = () => {
//     route.push("/preview");
//   };
//   return (
//     <>
//       <Header />
//       <h1
//         style={{
//           width: "100%",
//           textAlign: "center",
//           padding: "4px",
//           background: "beige",
//           fontSize: "28px",
//           fontWeight: "500",
//         }}
//       >
//         Write Your Blog
//       </h1>

//       <form onSubmit={handleSubmit(onSubmit)}>
//         <label>
//           <Controller
//             name="title"
//             control={control}
//             rules={{ required: "Title is required" }}
//             render={({ field }) => (
//               <input
//                 type="text"
//                 placeholder="Title"
//                 {...field}
//                 style={{
//                   margin: "20px 50px 0px 50px",
//                   padding: "19px",
//                   width: "26vw",
//                 }}
//               />
//             )}
//           />
//         </label>
//         <br />
//         <label>
//           <Controller
//             name="content"
//             control={control}
//             render={({ field }) => <TipTap setDesc={setDesc} {...field} />}
//           />
//         </label>
//         <br />

//         <div
//           style={{ width: "100%", textAlign: "center", marginBottom: "20px" }}
//         >
//           <button
//             type="submit"
//             onClick={handleClick}
//             style={{
//               width: "20em",
//               borderRadius: "8px",
//               border: "none",
//               backgroundColor: "#4b6bfb",
//               color: "white",
//               padding: "10px",
//             }}
//           >
//             Preview
//           </button>
//         </div>
//       </form>

//       <Footer />
//     </>
//   );
// }

// export default UserBlogsPage;

"use client";

import TipTap from "../components/tiptapEditor/tiptap";
import React, { useEffect } from "react";
import { useState } from "react";
// import parser from "html-react-parser";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import { useForm, Controller } from "react-hook-form";
import { useMutation, useQuery } from "@apollo/client";
import { Add_Post } from "../GraphqlApi/mutation";

import createApolloClient from "../GraphqlApi/apolloclient";
import { useRouter } from "next/navigation";
import {
  Button,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";

interface IData {
  content: String;
  istrending: Boolean;
  shortDescription: String;
  tags: String;
  title: String;
}

function UserBlogsPage() {
  const router = useRouter();

  const { control, handleSubmit } = useForm();
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");

  const client = createApolloClient(
    "https://244b-103-179-9-163.ngrok-free.app/graphql"
  );

  const [addPost] = useMutation(Add_Post, {
    client,
  });

  const onSubmit = async (data: any) => {
    try {
      const { title, content, istrending, tags, shortDescription } = data;
      console.log(
        "Post",
        data.title,
        desc,
        data.istrending,
        data.tags,
        data.shortDescription
      );
      const result = await addPost({
        variables: {
          // addPostContent2: desc,
          // // addPostImage: image,
          // addPostIsTrending: data.istrending,
          // addPostShortDescription: data.shortDescription,
          // addPostTags: data.tags,
          // addPostTitle2: data.title,
          title,
          content,
          istrending,
          tags,
          shortDescription,
        },
      });
      console.log("result", result);

      // console.log("After Mutation Call", result);
      // const newPost = result.data.addPost;

      // console.log("New post created:", newPost);

      router.push("/preview");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const handleButton = () => {
    router.push("/blogs");
  };

  return (
    <>
      <Header />
      <Button
        style={{
          fontSize: "18px",
        }}
        onClick={handleButton}
      >
        Back
      </Button>
      <h1
        style={{
          // width: "100%",
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
          margin: "25px 50px",
        }}
      >
        <label style={{ fontSize: "20px" }}>
          Title:
          <br />
          <Controller
            name="title"
            control={control}
            rules={{ required: "Title is required" }}
            render={({ field }) => (
              <TextField id="standard-basic" variant="standard" {...field} />
            )}
          />
        </label>
        <br />
        <br />
        <label style={{ fontSize: "20px" }}>
          Tags:
          <br />
          <br />
          <Controller
            name="tags"
            control={control}
            render={({ field }) => (
              <FormControl style={{ minWidth: "200px" }}>
                <InputLabel id="tags-label">Tags</InputLabel>
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
        </label>
        <br /> <br />
        <label style={{ fontSize: "20px" }}>
          Is Trending:
          <br /> <br />
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
                  control={<Radio />}
                  label=" True"
                />
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="False"
                />
              </RadioGroup>
            )}
          />
        </label>
        <br />
        <label style={{ fontSize: "20px" }}>
          Short Description:
          <br />
          <br />
          <Controller
            name="shortDescription"
            control={control}
            render={({ field }) => <TextField fullWidth id="fullWidth" />}
          />
        </label>
        <br />
        <br />
        <label>
          <br />
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
          <Button
            className="Button"
            variant="contained"
            type="submit"
            style={{
              boxShadow: "0px 12px 24px -6px rgba(24, 26, 42, 0.12)",
              borderRadius: 12,
              color: "white",
              fontSize: 18,
              fontFamily: "Work Sans",
              fontWeight: "500",
              wordWrap: "break-word",
              marginLeft: 0,
              marginTop: "10px",
              marginBottom: "50px",
            }}
          >
            Preview
          </Button>
        </div>
      </form>

      <Footer />
    </>
  );
}

export default UserBlogsPage;
