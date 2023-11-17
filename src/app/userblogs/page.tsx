// "use client";

// import TipTap from "../components/tiptapEditor/tiptap";
// import React from "react";
// import { useState } from "react";
// import parser from "html-react-parser";
// import Header from "../components/Header/header";
// import Footer from "../components/Footer/footer";
// import { useForm, Controller } from "react-hook-form";
// import { useMutation } from "@apollo/client";
// import { CREATE_POST } from "../GraphqlApi/mutation";
// import createApolloClient from "../GraphqlApi/apolloclient";

// function UserBlogsPage() {
//   const client = createApolloClient("");
//   const [createPost] = useMutation(CREATE_POST, { client });
//   const { control, handleSubmit } = useForm();
//   const [desc, setDesc] = useState("");

//   const onSubmit = async (data: any) => {
//     try {
//       console.log("Post", data.title, desc);
//       const result = await createPost({
//         variables: { title: data.title, content: parser(desc) },
//       });
//       console.log("New post created:", result.data.createPost);
//     } catch (error) {
//       console.error("Error creating post:");
//     }
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
//             style={{
//               width: "20em",
//               borderRadius: "8px",
//               border: "none",
//               backgroundColor: "#4b6bfb",
//               color: "white",
//               padding: "10px",
//             }}
//           >
//             Post
//           </button>
//         </div>
//       </form>

//       <Footer />
//     </>
//   );
// }

// export default UserBlogsPage;
