// "use client";
// import { Container } from "@mui/material";
// import { Card, IconButton, CardContent, CardActions } from "@mui/material";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import { red } from "@mui/material/colors";
// import Header from "../components/Header/header";
// import Footer from "../components/Footer/footer";
// import React from "react";

// const page = () => {
//   return (
//     <>
//       <Header />
//       <Container maxWidth="lg">
//         <Card
//           sx={{
//             maxWidth: 1000,
//             marginBottom: "60px",
//             marginTop: "60px",
//             padding: "40px",
//           }}
//         >
//           <div
//             className="BlogInfo"
//             style={{
//               width: 800,
//               height: 176,
//               flexDirection: "column",
//               justifyContent: "flex-start",
//               alignItems: "flex-start",
//               gap: 20,
//               display: "inline-flex",
//               margin: "20px",
//             }}
//           >
//             <div
//               className="Heading"
//               style={{
//                 height: 128,
//                 flexDirection: "column",
//                 justifyContent: "flex-start",
//                 alignItems: "flex-start",
//                 gap: 16,
//                 display: "flex",
//               }}
//             >
//               <div
//                 className="ABadge"
//                 style={{
//                   paddingLeft: 12,
//                   paddingRight: 12,
//                   paddingTop: 6,
//                   paddingBottom: 6,
//                   background: "#4B6BFB",
//                   borderRadius: 6,
//                   justifyContent: "center",
//                   alignItems: "center",
//                   gap: 4,
//                   display: "inline-flex",
//                 }}
//               >
//                 <div
//                   className="Text"
//                   style={{
//                     color: "white",
//                     fontSize: 14,
//                     fontFamily: "Work Sans",
//                     fontWeight: "500",
//                     wordWrap: "break-word",
//                   }}
//                 >
//                   Technology
//                 </div>
//               </div>
//               <div
//                 className="Title"
//                 style={{
//                   alignSelf: "stretch",
//                   color: "#181A2A",
//                   fontSize: 36,
//                   fontFamily: "Work Sans",
//                   fontWeight: "600",
//                   wordWrap: "break-word",
//                 }}
//               >
//                 The Impact of Technology on the Workplace: How Technology is
//                 Changing
//               </div>
//             </div>
//             <div
//               className="ShortInfo"
//               style={{
//                 justifyContent: "flex-start",
//                 alignItems: "center",
//                 gap: 24,
//                 display: "inline-flex",
//               }}
//             >
//               <div
//                 className="AAuthor"
//                 style={{
//                   justifyContent: "flex-start",
//                   alignItems: "center",
//                   gap: 8,
//                   display: "flex",
//                 }}
//               >
//                 <img
//                   className="Image"
//                   style={{ width: 28, height: 28, borderRadius: 28 }}
//                   src="https://via.placeholder.com/28x28"
//                 />
//                 <div
//                   className="Author"
//                   style={{
//                     color: "#696A75",
//                     fontSize: 14,
//                     fontFamily: "Work Sans",
//                     fontWeight: "500",
//                     wordWrap: "break-word",
//                   }}
//                 >
//                   Tracey Wilson
//                 </div>
//               </div>
//               <div
//                 className="Date"
//                 style={{
//                   color: "#696A75",
//                   fontSize: 14,
//                   fontFamily: "Work Sans",
//                   fontWeight: "400",
//                   wordWrap: "break-word",
//                 }}
//               >
//                 August 20, 2022
//               </div>
//             </div>
//           </div>
//           <img
//             className="Image"
//             style={{ width: 800, height: 462, borderRadius: 12 }}
//             src="https://source.unsplash.com/random?wallpapers"
//           />
//           <CardContent>
//             <div
//               className="Article"
//               style={{
//                 width: 804,
//                 color: "#3B3C4A",
//                 fontSize: 20,
//                 fontFamily: "Source Serif Pro",
//                 fontWeight: "400",
//                 wordWrap: "break-word",
//                 marginTop: "20px",
//               }}
//             >
//               Traveling is an enriching experience that opens up new horizons,
//               exposes us to different cultures, and creates memories that last a
//               lifetime. However, traveling can also be stressful and
//               overwhelming, especially if you don't plan and prepare adequately.
//               In this blog article, we'll explore tips and tricks for a
//               memorable journey and how to make the most of your travels.
//               <br />
//               <br />
//               One of the most rewarding aspects of traveling is immersing
//               yourself in the local culture and customs. This includes trying
//               local cuisine, attending cultural events and festivals, and
//               interacting with locals. Learning a few phrases in the local
//               language can also go a long way in making connections and showing
//               respect.
//             </div>
//             <div
//               className="Title"
//               style={{
//                 width: 800,
//                 color: "#181A2A",
//                 fontSize: 24,
//                 fontFamily: "Work Sans",
//                 fontWeight: "600",
//                 wordWrap: "break-word",
//                 marginTop: "20px",
//               }}
//             >
//               Plan Your Itinerary
//             </div>
//             <div
//               className="Article"
//               style={{
//                 width: 800,
//                 color: "#3B3C4A",
//                 fontSize: 20,
//                 fontFamily: "Source Serif Pro",
//                 fontWeight: "400",
//                 wordWrap: "break-word",
//                 marginTop: "20px",
//               }}
//             >
//               While it's essential to leave room for spontaneity and unexpected
//               adventures, having a rough itinerary can help you make the most of
//               your time and budget. Identify the must-see sights and experiences
//               and prioritize them according to your interests and preferences.
//               This will help you avoid overscheduling and ensure that you have
//               time to relax and enjoy your journey.
//               <br />
//               <br />
//               Vitae sapien pellentesque habitant morbi tristique. Luctus
//               venenatis lectus magna fringilla. Nec ullamcorper sit amet risus
//               nullam eget felis. Tincidunt arcu non sodales neque sodales ut
//               etiam sit amet.
//             </div>
//             <div
//               className="Quote"
//               style={{
//                 width: 800,
//                 height: 128,
//                 padding: 32,
//                 background: "#F6F6F7",
//                 borderRadius: 12,
//                 borderLeft: "4px #E8E8EA solid",
//                 justifyContent: "flex-start",
//                 alignItems: "center",
//                 gap: 32,
//                 display: "inline-flex",
//                 marginTop: "20px",
//               }}
//             >
//               <div
//                 className="Text"
//                 style={{
//                   flex: "1 1 0",
//                   color: "#181A2A",
//                   fontSize: 24,
//                   fontFamily: "Source Serif Pro",
//                   fontStyle: "italic",
//                   fontWeight: "400",
//                   wordWrap: "break-word",
//                 }}
//               >
//                 “ Traveling can expose you to new environments and potential
//                 health risks, so it's crucial to take precautions to stay safe
//                 and healthy. ”
//               </div>
//             </div>
//           </CardContent>
//           <CardActions disableSpacing>
//             <IconButton aria-label="add to favorites">
//               <FavoriteIcon />
//             </IconButton>
//             <IconButton aria-label="share">
//               <ShareIcon />
//             </IconButton>
//           </CardActions>
//         </Card>
//       </Container>
//       <Footer />
//     </>
//   );
// };

// export default page;
"use client";
import { Container } from "@mui/material";
import { Card, IconButton, CardContent, CardActions } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { red } from "@mui/material/colors";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import React from "react";

const page = () => {
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
                  Tracey Wilson
                </div>
              </div>
              <div
                className="Date"
                style={{
                  color: "#696A75",
                  fontSize: 14,
                  fontFamily: "Work Sans",
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                August 20, 2022
              </div>
            </div>
          </div>
          <img
            className="Image"
            style={{ width: 800, height: 462, borderRadius: 12 }}
            src="https://source.unsplash.com/random?wallpapers"
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
              Traveling is an enriching experience that opens up new horizons,
              exposes us to different cultures, and creates memories that last a
              lifetime. However, traveling can also be stressful and
              overwhelming, especially if you don't plan and prepare adequately.
              In this blog article, we'll explore tips and tricks for a
              memorable journey and how to make the most of your travels.
              <br />
              <br />
              One of the most rewarding aspects of traveling is immersing
              yourself in the local culture and customs. This includes trying
              local cuisine, attending cultural events and festivals, and
              interacting with locals. Learning a few phrases in the local
              language can also go a long way in making connections and showing
              respect.
            </div>
            <div
              className="Title"
              style={{
                width: 800,
                color: "#181A2A",
                fontSize: 24,
                fontFamily: "Work Sans",
                fontWeight: "600",
                wordWrap: "break-word",
                marginTop: "20px",
              }}
            >
              Plan Your Itinerary
            </div>
            <div
              className="Article"
              style={{
                width: 800,
                color: "#3B3C4A",
                fontSize: 20,
                fontFamily: "Source Serif Pro",
                fontWeight: "400",
                wordWrap: "break-word",
                marginTop: "20px",
              }}
            >
              While it's essential to leave room for spontaneity and unexpected
              adventures, having a rough itinerary can help you make the most of
              your time and budget. Identify the must-see sights and experiences
              and prioritize them according to your interests and preferences.
              This will help you avoid overscheduling and ensure that you have
              time to relax and enjoy your journey.
              <br />
              <br />
              Vitae sapien pellentesque habitant morbi tristique. Luctus
              venenatis lectus magna fringilla. Nec ullamcorper sit amet risus
              nullam eget felis. Tincidunt arcu non sodales neque sodales ut
              etiam sit amet.
            </div>
            <div
              className="Quote"
              style={{
                width: 800,
                height: 128,
                padding: 32,
                background: "#F6F6F7",
                borderRadius: 12,
                borderLeft: "4px #E8E8EA solid",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 32,
                display: "inline-flex",
                marginTop: "20px",
              }}
            >
              <div
                className="Text"
                style={{
                  flex: "1 1 0",
                  color: "#181A2A",
                  fontSize: 24,
                  fontFamily: "Source Serif Pro",
                  fontStyle: "italic",
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                “ Traveling can expose you to new environments and potential
                health risks, so it's crucial to take precautions to stay safe
                and healthy. ”
              </div>
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
