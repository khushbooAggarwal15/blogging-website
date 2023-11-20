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
import React, { useState } from "react";
import "../public/images/Image.png";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import pic from "../public/images/Image.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AddIcon from "@mui/icons-material/Add";

const BlogsPage = () => {
  const defaultTheme = createTheme();
  const route = useRouter();
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    await setLoading(true);
    route.push("/singleblog");
  };

  const handlebutton = async () => {
    route.push("/userblogs");
  };

  return (
    <>
      <Header />
      <ThemeProvider theme={defaultTheme}>
        <Container maxWidth="lg">
          <main>
            <Button
              className="Button"
              variant="text"
              onClick={handlebutton}
              style={{
                boxShadow: "0px 12px 24px -6px rgba(24, 26, 42, 0.12)",
                borderRadius: 12,
                color: "#696A75",
                fontSize: 18,
                fontFamily: "Work Sans",
                fontWeight: "500",
                wordWrap: "break-word",
                marginLeft: "900px",
                marginTop: "50px",
                // marginBottom: "50px",
              }}
            >
              Create Blogs
              <Fab
                size="small"
                style={{ marginLeft: "10px" }}
                color="primary"
                aria-label="add"
              >
                <AddIcon />
              </Fab>
            </Button>
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
                      Technology
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
                    The Impact of Technology on the Workplace: How Technology is
                    Changing
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
                      src="https://via.placeholder.com/36x36"
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
                      Jason Francisco
                    </div>
                  </div>
                  <div
                    className="Date"
                    style={{
                      color: "#97989F",
                      fontSize: 16,
                      fontFamily: "Work Sans",
                      fontWeight: "400",
                      wordWrap: "break-word",
                    }}
                  >
                    August 20, 2022
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

            {/* Rows --- >>>>  */}

            <div
              className="Row"
              style={{
                width: 1216,
                height: 488,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 20,
                display: "inline-flex",
              }}
            >
              <div
                className="MPostCardGrid"
                style={{
                  width: 392,
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
                }}
              >
                <img
                  className="Rectangle38"
                  style={{ width: 360, height: 240, borderRadius: 6 }}
                  src="https://source.unsplash.com/random?wallpapers"
                />
                <div
                  className="Content"
                  style={{
                    alignSelf: "stretch",
                    height: 200,
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
                        Technology
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
                      The Impact of Technology on the Workplace: How Technology
                      is Changing
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
                        src="https://via.placeholder.com/36x36"
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
                        Tracey Wilson
                      </div>
                    </div>
                    <div
                      className="Date"
                      style={{
                        color: "#97989F",
                        fontSize: 16,
                        fontFamily: "Work Sans",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}
                    >
                      August 20, 2022
                    </div>
                  </div>
                </div>
                <Button
                  onClick={handleClick}
                  variant="text"
                  style={{ marginLeft: "180px" }}
                >
                  Containue Reading
                </Button>
              </div>

              <div
                className="MPostCardGrid"
                style={{
                  width: 392,
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
                }}
              >
                <img
                  className="Rectangle38"
                  style={{ width: 360, height: 240, borderRadius: 6 }}
                  src="https://source.unsplash.com/random?wallpapers"
                />
                <div
                  className="Content"
                  style={{
                    alignSelf: "stretch",
                    height: 200,
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
                        Technology
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
                      The Impact of Technology on the Workplace: How Technology
                      is Changing
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
                        src="https://via.placeholder.com/36x36"
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
                        Jason Francisco
                      </div>
                    </div>
                    <div
                      className="Date"
                      style={{
                        color: "#97989F",
                        fontSize: 16,
                        fontFamily: "Work Sans",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}
                    >
                      August 20, 2022
                    </div>
                  </div>
                </div>
                <Button
                  onClick={handleClick}
                  variant="text"
                  style={{ marginLeft: "180px" }}
                >
                  Containue Reading
                </Button>
              </div>
              <div
                className="MPostCardGrid"
                style={{
                  width: 392,
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
                }}
              >
                <img
                  className="Rectangle38"
                  style={{ width: 360, height: 240, borderRadius: 6 }}
                  src="https://source.unsplash.com/random?wallpapers"
                />
                <div
                  className="Content"
                  style={{
                    alignSelf: "stretch",
                    height: 200,
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
                        Technology
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
                      The Impact of Technology on the Workplace: How Technology
                      is Changing
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
                        src="https://via.placeholder.com/36x36"
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
                        Elizabeth Slavin
                      </div>
                    </div>
                    <div
                      className="Date"
                      style={{
                        color: "#97989F",
                        fontSize: 16,
                        fontFamily: "Work Sans",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}
                    >
                      August 20, 2022
                    </div>
                  </div>
                </div>
                <Button
                  onClick={handleClick}
                  variant="text"
                  style={{ marginLeft: "180px" }}
                >
                  Containue Reading
                </Button>
              </div>
            </div>

            <div
              className="Row"
              style={{
                width: 1216,
                height: 488,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 20,
                display: "inline-flex",
                marginTop: "80px",
              }}
            >
              <div
                className="MPostCardGrid"
                style={{
                  width: 392,
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
                }}
              >
                <img
                  className="Rectangle38"
                  style={{ width: 360, height: 240, borderRadius: 6 }}
                  src="https://source.unsplash.com/random?wallpapers"
                />
                <div
                  className="Content"
                  style={{
                    alignSelf: "stretch",
                    height: 200,
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
                        Technology
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
                      The Impact of Technology on the Workplace: How Technology
                      is Changing
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
                        src="https://via.placeholder.com/36x36"
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
                        Tracey Wilson
                      </div>
                    </div>
                    <div
                      className="Date"
                      style={{
                        color: "#97989F",
                        fontSize: 16,
                        fontFamily: "Work Sans",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}
                    >
                      August 20, 2022
                    </div>
                  </div>
                </div>
                <Button
                  onClick={handleClick}
                  variant="text"
                  style={{ marginLeft: "180px" }}
                >
                  Containue Reading
                </Button>
              </div>
              <div
                className="MPostCardGrid"
                style={{
                  width: 392,
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
                }}
              >
                <img
                  className="Rectangle38"
                  style={{ width: 360, height: 240, borderRadius: 6 }}
                  src="https://source.unsplash.com/random?wallpapers"
                />
                <div
                  className="Content"
                  style={{
                    alignSelf: "stretch",
                    height: 200,
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
                        Technology
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
                      The Impact of Technology on the Workplace: How Technology
                      is Changing
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
                        src="https://via.placeholder.com/36x36"
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
                        Jason Francisco
                      </div>
                    </div>
                    <div
                      className="Date"
                      style={{
                        color: "#97989F",
                        fontSize: 16,
                        fontFamily: "Work Sans",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}
                    >
                      August 20, 2022
                    </div>
                  </div>
                </div>
                <Button
                  onClick={handleClick}
                  variant="text"
                  style={{ marginLeft: "180px" }}
                >
                  Containue Reading
                </Button>
              </div>
              <div
                className="MPostCardGrid"
                style={{
                  width: 392,
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
                }}
              >
                <img
                  className="Rectangle38"
                  style={{ width: 360, height: 240, borderRadius: 6 }}
                  src="https://source.unsplash.com/random?wallpapers"
                />
                <div
                  className="Content"
                  style={{
                    alignSelf: "stretch",
                    height: 200,
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
                        Technology
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
                      The Impact of Technology on the Workplace: How Technology
                      is Changing
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
                        src="https://via.placeholder.com/36x36"
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
                        Elizabeth Slavin
                      </div>
                    </div>
                    <div
                      className="Date"
                      style={{
                        color: "#97989F",
                        fontSize: 16,
                        fontFamily: "Work Sans",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}
                    >
                      August 20, 2022
                    </div>
                  </div>
                </div>
                <Button
                  onClick={handleClick}
                  variant="text"
                  style={{ marginLeft: "180px" }}
                >
                  Containue Reading
                </Button>
              </div>
            </div>

            <div
              className="Row"
              style={{
                width: 1216,
                height: 488,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 20,
                display: "inline-flex",
                marginTop: "80px",
              }}
            >
              <div
                className="MPostCardGrid"
                style={{
                  width: 392,
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
                }}
              >
                <img
                  className="Rectangle38"
                  style={{ width: 360, height: 240, borderRadius: 6 }}
                  src="https://source.unsplash.com/random?wallpapers"
                />
                <div
                  className="Content"
                  style={{
                    alignSelf: "stretch",
                    height: 200,
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
                        Technology
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
                      The Impact of Technology on the Workplace: How Technology
                      is Changing
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
                        src="https://via.placeholder.com/36x36"
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
                        Tracey Wilson
                      </div>
                    </div>
                    <div
                      className="Date"
                      style={{
                        color: "#97989F",
                        fontSize: 16,
                        fontFamily: "Work Sans",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}
                    >
                      August 20, 2022
                    </div>
                  </div>
                </div>
                <Button
                  onClick={handleClick}
                  variant="text"
                  style={{ marginLeft: "180px" }}
                >
                  Containue Reading
                </Button>
              </div>
              <div
                className="MPostCardGrid"
                style={{
                  width: 392,
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
                }}
              >
                <img
                  className="Rectangle38"
                  style={{ width: 360, height: 240, borderRadius: 6 }}
                  src="https://source.unsplash.com/random?wallpapers"
                />
                <div
                  className="Content"
                  style={{
                    alignSelf: "stretch",
                    height: 200,
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
                        Technology
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
                      The Impact of Technology on the Workplace: How Technology
                      is Changing
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
                        src="https://via.placeholder.com/36x36"
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
                        Jason Francisco
                      </div>
                    </div>
                    <div
                      className="Date"
                      style={{
                        color: "#97989F",
                        fontSize: 16,
                        fontFamily: "Work Sans",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}
                    >
                      August 20, 2022
                    </div>
                  </div>
                </div>
                <Button
                  onClick={handleClick}
                  variant="text"
                  style={{ marginLeft: "180px" }}
                >
                  Containue Reading
                </Button>
              </div>
              <div
                className="MPostCardGrid"
                style={{
                  width: 392,
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
                }}
              >
                <img
                  className="Rectangle38"
                  style={{ width: 360, height: 240, borderRadius: 6 }}
                  src="https://source.unsplash.com/random?wallpapers"
                />
                <div
                  className="Content"
                  style={{
                    alignSelf: "stretch",
                    height: 200,
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
                        Technology
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
                      The Impact of Technology on the Workplace: How Technology
                      is Changing
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
                        src="https://via.placeholder.com/36x36"
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
                        Elizabeth Slavin
                      </div>
                    </div>
                    <div
                      className="Date"
                      style={{
                        color: "#97989F",
                        fontSize: 16,
                        fontFamily: "Work Sans",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}
                    >
                      August 20, 2022
                    </div>
                  </div>
                </div>
                <Button
                  onClick={handleClick}
                  variant="text"
                  style={{ marginLeft: "180px" }}
                >
                  Containue Reading
                </Button>
              </div>
            </div>

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
