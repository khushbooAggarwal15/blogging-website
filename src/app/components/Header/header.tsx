import React from "react";
import {
  Container,
  Input,
  ListContainer,
  ListItem,
  SearchContainer,
  SearchImage,
} from "./header.styles";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import search from "../../public/images/search-outline.png";
import Accountmenu from "../accountmenu/accountmenu";
import Link from "next/link";
function header() {
  return (
    <Container>
      <Image src={logo} alt={"logo"} width={150} height={50} />

      <ListContainer>
        <ListItem>
          {" "}
          <Link href="/blogs"> Home</Link>
        </ListItem>
        <ListItem>
          {" "}
          <Link href="/userblogs">Create Blog</Link>
        </ListItem>

        <ListItem>Single Post</ListItem>
        <ListItem>Pages</ListItem>
        <ListItem>Contact</ListItem>
      </ListContainer>
      <SearchContainer>
        <Input type="search" placeholder="Search" />
        <SearchImage src={search} alt={"logo"} width={0} height={20} />
      </SearchContainer>

      <Accountmenu />
    </Container>
  );
}

export default header;
