"use client";
import { Container } from "@mui/material";
import { Card, IconButton, CardContent, CardActions } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
const page = () => {
  const jsonData = localStorage.getItem("myData");
  const data = jsonData ? JSON.parse(jsonData) : null;

  const posts = data.posts[0];
  console.log(posts[0]);

  return (
    <>
      <Header />
      <Container maxWidth="lg">
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
                  {posts?.tags}
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
                {posts?.title}
              </div>
            </div>
            <div
              className="ShortInfo"
              style={{
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 24,
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
                <img
                  className="Image"
                  style={{ width: 28, height: 28, borderRadius: 28 }}
                  src="https://via.placeholder.com/28x28"
                />
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
                  {posts?.istrending ? "Trending" : "Not trending"}
                </div>
              </div>
            </div>
          </div>
          <img
            className="Image"
            style={{ width: 800, height: 462, borderRadius: 12 }}
            src={posts?.image}
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
              {posts?.content}
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
      </Container>
      <Footer />
    </>
  );
};

export default page;
