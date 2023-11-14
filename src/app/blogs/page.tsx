"use client";
import { ThemeProvider } from "@emotion/react";
import { createTheme, Container, Grid, Button } from "@mui/material";
import React from "react";
import FeaturedPost from "./featurepost/page";
import "../public/images/Image.png";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

const BlogsPage = () => {
  const defaultTheme = createTheme();

  const featuredPosts = [
    {
      title: "Featured post",
      date: "Nov 12",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: "https://source.unsplash.com/random?wallpapers",
      imageLabel: "Image Text",
    },
    {
      title: "Post title",
      date: "Nov 11",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: "https://source.unsplash.com/random?wallpapers",
      imageLabel: "Image Text",
    },
    {
      title: "Post title",
      date: "Nov 11",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: "https://source.unsplash.com/random?wallpapers",
      imageLabel: "Image Text",
    },
    {
      title: "Post title",
      date: "Nov 11",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: "https://source.unsplash.com/random?wallpapers",
      imageLabel: "Image Text",
    },
    {
      title: "Post title",
      date: "Nov 11",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: "https://source.unsplash.com/random?wallpapers",
      imageLabel: "Image Text",
    },
  ];

  return (
    <>
      <Header />
      <ThemeProvider theme={defaultTheme}>
        <Container maxWidth="lg">
          <main>
            <div
              className="New"
              style={{
                height: 484,
                position: "relative",
              }}
            >
              <img
                className="DesignbetterWebsiteBookAssetsIllustrationsPrinciplesofproductdesignCover1920x1081"
                style={{
                  width: 1150,
                  height: 484,
                  left: 0,
                  top: 0,
                  position: "absolute",
                }}
                src="https://source.unsplash.com/random?wallpapers"
              />
              <div
                style={{
                  position: "absolute",
                  backgroundColor: "white",
                  marginTop: 420,
                  marginLeft: 120,
                  padding: 20,
                  zIndex: 1,
                  maxWidth: 350,
                  height: 150,
                  border: "2px solid blue",
                }}
              >
                <h3>
                  {" "}
                  The Impact Of Technology on The workspace : How texhnology is
                  changing
                </h3>
              </div>
            </div>

            <div
              className="ReadingLists"
              style={{
                width: 236,
                height: 65,
                color: "black",
                marginTop: 200,
                fontSize: 36,
                fontFamily: "Open Sans",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              Latest Post
            </div>
            <div>
              <Grid container spacing={6}>
                {featuredPosts.map((post) => (
                  <FeaturedPost key={post.title} post={post} />
                ))}
              </Grid>
            </div>

            <Button
              type="submit"
              variant="text"
              sx={{
                mt: 3,
                ml: 1,
              }}
            >
              View All posts
            </Button>
          </main>
        </Container>
      </ThemeProvider>
      <Footer />
    </>
  );
};

export default BlogsPage;
