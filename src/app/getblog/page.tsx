"use client";
import {  Container } from "@mui/material";
import { Card, IconButton, CardContent, CardActions } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

import { useEffect } from "react";
import { GET_POSTS } from "../GraphqlApi/queries";
import { useQuery } from "@apollo/client";
import createApolloClient from "../GraphqlApi/apolloclient";

import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import React from "react";

const client = createApolloClient(
  "https://certainly-grown-anchovy.ngrok-free.app/graphql"
);

const page = () => {
  const { error, data, loading, refetch } = useQuery(GET_POSTS, { client });

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
      <Container maxWidth="lg">
        <div>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>}

          {data?.posts.length > 0 && (
            <div key={data.posts[data.posts.length - 1]._id}>
              <Card
                sx={{
                  maxWidth: 1000,
                  marginBottom: "60px",
                  marginTop: "60px",
                  padding: "40px",
                }}
              >
                <div
                  className="BlogInfo"
                  style={{
                    width: 800,
                    height: 176,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 20,
                    display: "inline-flex",
                    margin: "20px",
                  }}
                >
                  <div
                    className="Heading"
                    style={{
                      height: 128,
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
                        paddingLeft: 12,
                        paddingRight: 12,
                        paddingTop: 6,
                        paddingBottom: 6,
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
                        {data.posts[data.posts.length - 1].tags}
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
                      {data.posts[data.posts.length - 1].title}
                    </div>
                  </div>
                  <div
                    className="ShortInfo"
                    style={{
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: 23,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      className="AAuthor"
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 8,
                        display: "flex",
                      }}
                    >
                      {data.posts[data.posts.length - 1].istrending == true ? (
                        <div
                          className="Author"
                          style={{
                            color: "#696A75",
                            fontSize: 14,
                            fontFamily: "Work Sans",
                            fontWeight: "500",
                            wordWrap: "break-word",
                          }}
                        >
                          Trending
                        </div>
                      ) : (
                        <div
                          className="Author"
                          style={{
                            color: "#696A75",
                            fontSize: 14,
                            fontFamily: "Work Sans",
                            fontWeight: "500",
                            wordWrap: "break-word",
                          }}
                        >
                          Not Trending
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <img
                  className="Image"
                  style={{ width: 800, height: 462, borderRadius: 12 }}
                  src={data.posts[data.posts.length - 1].image}
                />
                <CardContent>
                  <div
                    className="Article"
                    style={{
                      width: 804,
                      color: "#3B3C4A",
                      fontSize: 20,
                      fontFamily: "Source Serif Pro",
                      fontWeight: "400",
                      wordWrap: "break-word",
                      marginTop: "20px",
                    }}
                  >
                    {data.posts[data.posts.length - 1].content}
                  </div>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </div>
          )}
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default page;
