import styled from "styled-components";
import Image from "next/image";
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80vw;
  margin: 20px auto;
  align-items: center;
`;
export const ListContainer = styled.ul`
  display: flex;
  gap: 28px;
  list-style-type: none;
  color: #52525b;
  cursor: pointer;
`;

export const SearchContainer = styled.div``;
export const Input = styled.input`
  background: lightgray;
  border: none;
  padding: 10px;
  border-radius: 3px;
  width: 15rem;
`;

export const ListItem = styled.li`
  font-size: 17px;
`;
export const SearchImage = styled(Image)`
  position: relative;
  top: 5px;
  right: 27px;
`;
