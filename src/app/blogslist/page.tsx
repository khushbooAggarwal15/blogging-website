"use client";
import { ThemeProvider } from "@emotion/react";
import { createTheme, Container, Grid, Button } from "@mui/material";
import React from "react";
import FeaturedPost from "../blogs/featurepost/page";
import "../public/images/Image.png";

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
    <ThemeProvider theme={defaultTheme}>
      <Container maxWidth="lg">
        <main>
          <div
            className="New"
            style={{
              top: 80,
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
                zIndex: -1,
                position: "absolute",
              }}
              src="https://source.unsplash.com/random?wallpapers"
            />
            <div
              style={{
                position: "absolute",
                color: "white",
                marginTop: 400,
                marginLeft: 80,
              }}
            >
              <h2>
                {" "}
                The Impact Of Technology on The workspace : How texhnology is
                changing
              </h2>
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
            Blogs List
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
            variant="contained"
            sx={{
              mt: 3,
              ml: 1,
            }}
          >
            Load More
          </Button>
        </main>
      </Container>
    </ThemeProvider>
  );
};

export default BlogsPage;
