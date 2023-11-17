"use client";
import React from "react";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import { Container } from "@mui/material";

const Profile = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <div
          className="OAuthorInfo"
          style={{
            width: 1216,
            height: 344,
            padding: 48,
            background: "#F6F6F7",
            borderRadius: 12,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
            marginBottom: "50px",
            gap: 10,
            display: "inline-flex",
          }}
        >
          <div
            className="Content"
            style={{
              height: 248,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 24,
              display: "flex",
            }}
          >
            <div
              className="AAuthor"
              style={{
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 16,
                display: "inline-flex",
              }}
            >
              <img
                className="Image"
                style={{ width: 64, height: 64, borderRadius: 80 }}
                src="https://via.placeholder.com/64x64"
              />
              <div
                className="Info"
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  display: "inline-flex",
                }}
              >
                <div
                  className="JonathanDoe"
                  style={{
                    color: "#181A2A",
                    fontSize: 20,
                    fontFamily: "Work Sans",
                    fontWeight: "500",
                    wordWrap: "break-word",
                  }}
                >
                  Jonathan Doe
                </div>
                <div
                  className="CollaboratorEditor"
                  style={{
                    color: "#696A75",
                    fontSize: 14,
                    fontFamily: "Work Sans",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  Collaborator & Editor
                </div>
              </div>
            </div>
            <div
              className="Para"
              style={{
                alignSelf: "stretch",
                textAlign: "center",
                color: "#3B3C4A",
                fontSize: 18,
                fontFamily: "Work Sans",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              Meet Jonathan Doe, a passionate writer and blogger with a love for
              technology and travel. Jonathan holds a degree in Computer Science
              and has spent years working in the tech industry, gaining a deep
              understanding of the impact technology has on our lives.
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Profile;
