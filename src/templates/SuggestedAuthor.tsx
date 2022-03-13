import React from "react";
import styled from "styled-components";
import WriterSuggest from "../molecules/WriterSuggest";

const AuthorData = [
  {
    id: 1,
    imgUrl: "/images/authors/1.png",
    name: "Alexandre Dumas",
    isFollow: false,
  },
  {
    id: 2,
    imgUrl: "/images/authors/2.png",
    name: "Stephen King",
    isFollow: false,
  },
  {
    id: 3,
    imgUrl: "/images/authors/3.png",
    name: "Fyodor Dostoevsky",
    isFollow: false,
  },
  {
    id: 4,
    imgUrl: "/images/authors/4.png",
    name: "Friedrich Nietzsche",
    isFollow: false,
  },
  {
    id: 5,
    imgUrl: "/images/authors/5.png",
    name: "Edgar Allan Poe",
    isFollow: false,
  },
  {
    id: 6,
    imgUrl: "/images/authors/6.png",
    name: "F. Scott Fitzgerald",
    isFollow: false,
  },
  {
    id: 7,
    imgUrl: "/images/authors/7.png",
    name: "Leo Tolstoy",
    isFollow: false,
  },
  {
    id: 8,
    imgUrl: "/images/authors/8.png",
    name: "J. R. R. Tolkien",
    isFollow: false,
  },
];

const SuggestedAuthor = () => {
  return (
    <SuggestedAuthorCont>
      <SuggestedAuthorHeader>
        <SuggestedAuthorTitle>Suggested Authors</SuggestedAuthorTitle>
        <SuggestedAuthorSeeMode>View All</SuggestedAuthorSeeMode>
      </SuggestedAuthorHeader>
      {AuthorData.map((item) => (
        <WriterSuggest
          key={item.id}
          imgUrl={item.imgUrl}
          name={item.name}
          isFollow={item.isFollow}
        />
      ))}
    </SuggestedAuthorCont>
  );
};

export default SuggestedAuthor;

const SuggestedAuthorCont = styled.div`
  padding: 20px;
  background: rgba(255, 255, 255, 0.14);
  border-radius: 20px;
`;

const SuggestedAuthorHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const SuggestedAuthorTitle = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  text-align: center;

  color: rgba(255, 255, 255, 0.87);
`;
const SuggestedAuthorSeeMode = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height */

  text-align: center;

  color: rgba(255, 255, 255, 0.6);
`;
