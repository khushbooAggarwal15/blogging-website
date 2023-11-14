import React from "react";
import {
  AboutContainer,
  MainContainer,
  Container,
  PolicyContainer,
  LogoContainer,
  TermsContainer,
  Border,
  Heading,
  Button,
  Height,
  QuickLinkContainer,
  EmailContainer,
  NewsContainer,
  Input,
} from "./footer.styles";
import search from "../../public/images/search-outline.png";
import Image from "next/image";
import footerLogo from "../../public/images/footerlogo.png";
import { SearchImage } from "../Header/header.styles";
function footer() {
  return (
    <MainContainer>
      <Container>
        {" "}
        <AboutContainer>
          <Heading>About</Heading>
          <Height>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <p>Email:info@jstemplate.com</p>
            <p>Phone:9588721893</p>
          </Height>
        </AboutContainer>
        <QuickLinkContainer>
          <Heading>Quick Link</Heading>
          <Height>
            <p>Home</p>
            <p>About</p>
            <p>Blog</p>
            <p>Archived</p>
            <p>Author</p>
            <p>Contact</p>
          </Height>
        </QuickLinkContainer>
        <QuickLinkContainer>
          <Heading>Category</Heading>
          <Height>
            <p>Lifestyle</p>
            <p>Technology</p>
            <p>Travel</p>
            <p>Buisness</p>
            <p>Economy</p>
            <p>Sports</p>
          </Height>
        </QuickLinkContainer>
        <NewsContainer>
          <Heading>Weekly Newsletter</Heading>
          <p>Get Blog Articles and Offers via Email</p>

          <Input type="email" placeholder="Email" />

          <Button>Subscribe</Button>
        </NewsContainer>
      </Container>

      <Border></Border>
      <PolicyContainer>
        <LogoContainer>
          <Image src={footerLogo} alt="logo" width={50} height={50} />
          <div>
            <p>MetaBlog</p>
            <p>Template 2023.All Rights Reserved</p>
          </div>
        </LogoContainer>
        <TermsContainer>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
        </TermsContainer>
      </PolicyContainer>
    </MainContainer>
  );
}

export default footer;
