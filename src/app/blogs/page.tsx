"use client";
import { ThemeProvider } from "@emotion/react";
import {
  createTheme,
  Container,
  Grid,
  Button,
  Backdrop,
  CircularProgress,
  Fab,
  Box,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "../public/images/Image.png";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import pic from "../public/images/Image.png";
import Image from "next/image";

import createApolloClient from "@/GraphqlApi/apolloclient";
import { useQuery } from "@apollo/client";
import { GET_POSTS } from "@/GraphqlApi/queries";
import { useRouter } from "next/navigation";

const client = createApolloClient(
  "https://certainly-grown-anchovy.ngrok-free.app/graphql"
);
const BlogsPage = () => {
  const router = useRouter();
  const defaultTheme = createTheme();

  const [loading, setLoading] = useState(false);

  const { error, data, refetch } = useQuery(GET_POSTS, { client });
  const handleClick = () => {
    console.log(data);
    window.localStorage.setItem("myData", JSON.stringify(data));
    router.push("/singleblog");
  };
  useEffect(() => {
    if (error) {
      console.error("Error fetching posts:", error);
    } else if (data) {
      refetch();
      console.log("Fetched posts:", data);
    } else {
      console.log("No posts");
    }
  }, [refetch, error, data]);
  return (
    <>
      <Header />
      <ThemeProvider theme={defaultTheme}>
        <Container maxWidth="lg">
          <main>
            <div
              className="Content"
              style={{
                width: 1216,
                height: 664,
                position: "relative",
                marginTop: "50px",
              }}
            >
              <Image
                className="DesignbetterWebsiteBookAssetsIllustrationsPrinciplesofproductdesignCover1920x1081"
                style={{
                  width: 1150,
                  height: 484,
                  left: 0,
                  top: 0,
                  zIndex: -1,
                  position: "absolute",
                }}
                src={pic}
                alt="pic"
              />
              <div
                className="Content"
                style={{
                  width: 598,
                  height: 304,
                  padding: 40,
                  background: "white",
                  boxShadow: "0px 12px 24px -6px rgba(24, 26, 42, 0.12)",
                  borderRadius: 12,
                  overflow: "hidden",
                  border: "1px #E8E8EA solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 24,
                  display: "inline-flex",
                  marginTop: "300px",
                  marginLeft: "60px",
                }}
              >
                <div
                  className="Heading"
                  style={{
                    alignSelf: "stretch",
                    height: 164,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 16,
                    display: "flex",
                  }}
                >
                  <div
                    className="ABadge"
                    style={{
                      paddingLeft: 10,
                      paddingRight: 10,
                      paddingTop: 4,
                      paddingBottom: 4,
                      background: "#4B6BFB",
                      borderRadius: 6,
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 4,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      className="Text"
                      style={{
                        color: "white",
                        fontSize: 14,
                        fontFamily: "Work Sans",
                        fontWeight: "500",
                        wordWrap: "break-word",
                      }}
                    >
                      {data?.posts[0]?.tags}
                    </div>
                  </div>
                  <div
                    className="Title"
                    style={{
                      alignSelf: "stretch",
                      color: "#181A2A",
                      fontSize: 36,
                      fontFamily: "Work Sans",
                      fontWeight: "600",
                      wordWrap: "break-word",
                    }}
                  >
                    {data?.posts[0]?.title}
                  </div>
                </div>
                <div
                  className="ShortInfo"
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 20,
                    display: "inline-flex",
                  }}
                >
                  <div
                    className="AAuthor"
                    style={{
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: 12,
                      display: "flex",
                    }}
                  >
                    <img
                      className="Image"
                      style={{ width: 36, height: 36, borderRadius: 28 }}
                      src={data?.posts[0]?.image}
                    />
                    <div
                      className="Author"
                      style={{
                        color: "#97989F",
                        fontSize: 16,
                        fontFamily: "Work Sans",
                        fontWeight: "500",
                        wordWrap: "break-word",
                      }}
                    >
                      {data?.posts[0]?.istrending == true
                        ? "Trending"
                        : "Not Trending"}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="Title"
              style={{
                width: 1216,
                color: "#181A2A",
                fontSize: 24,
                fontFamily: "Work Sans",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              Latest Post
            </div>

            {data?.posts ? (
              <div
                style={{
                  display: " grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: "20px",
                  width: "100%",
                }}
              >
                {data.posts.map((post: any) => (
                  <div key={post._id}>
                    <div
                      className="MPostCardGrid"
                      style={{
                        padding: 16,
                        background: "white",
                        borderRadius: 12,
                        overflow: "hidden",
                        border: "1px #E8E8EA solid",
                        boxShadow: "0px 12px 24px -6px rgba(24, 26, 42, 0.12)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 16,
                        display: "inline-flex",
                        width: "23em",
                        height: "29em",
                      }}
                    >
                      <img
                        className="Image"
                        style={{
                          width: "100%",
                          height: 150,
                          borderRadius: 12,
                        }}
                        src={post?.image}
                      />
                      <div
                        className="Content"
                        style={{
                          alignSelf: "stretch",

                          padding: 8,
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          gap: 20,
                          display: "flex",
                        }}
                      >
                        <div
                          className="Heading"
                          style={{
                            alignSelf: "stretch",

                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            gap: 16,
                            display: "flex",
                          }}
                        >
                          <div
                            className="ABadge"
                            style={{
                              paddingLeft: 10,
                              paddingRight: 10,
                              paddingTop: 4,
                              paddingBottom: 4,
                              background: "rgba(75, 107, 251, 0.05)",
                              borderRadius: 6,
                              justifyContent: "center",
                              alignItems: "center",
                              gap: 4,
                              display: "inline-flex",
                            }}
                          >
                            <div
                              className="Text"
                              style={{
                                color: "#4B6BFB",
                                fontSize: 14,
                                fontFamily: "Work Sans",
                                fontWeight: "500",
                                wordWrap: "break-word",
                              }}
                            >
                              {post?.tags}
                            </div>
                          </div>
                          <div
                            className="Title"
                            style={{
                              alignSelf: "stretch",
                              color: "#181A2A",
                              fontSize: 24,
                              fontFamily: "Work Sans",
                              fontWeight: "600",
                              wordWrap: "break-word",
                            }}
                          >
                            {post?.title}
                          </div>
                        </div>
                        <div
                          className="Author"
                          style={{
                            color: "#97989F",
                            fontSize: 16,
                            fontFamily: "Work Sans",
                            fontWeight: "500",
                            wordWrap: "break-word",
                          }}
                        >
                          {post.istrending == true
                            ? "Trending"
                            : "Not Trending"}
                        </div>
                      </div>

                      <Button variant="text" onClick={handleClick}>
                        Continue Reading
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>No posts</p>
            )}

            {/* Rows --- >>>>  */}

            <Button
              className="Button"
              variant="text"
              style={{
                boxShadow: "0px 12px 24px -6px rgba(24, 26, 42, 0.12)",
                borderRadius: 12,
                color: "#696A75",
                fontSize: 18,
                fontFamily: "Work Sans",
                fontWeight: "500",
                wordWrap: "break-word",
                marginLeft: "500px",
                marginTop: "100px",
                marginBottom: "50px",
              }}
            >
              View All Post
            </Button>
            <Backdrop
              sx={{
                color: "black",
                zIndex: (theme) => theme.zIndex.drawer + 1,
              }}
              open={loading}
            >
              <Box sx={{ display: "flex" }}>
                <CircularProgress />
              </Box>
            </Backdrop>
          </main>
        </Container>
      </ThemeProvider>
      <Footer />
    </>
  );
};

export default BlogsPage;
