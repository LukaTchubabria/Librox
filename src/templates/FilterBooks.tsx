import React from "react";
import styled from "styled-components";
import Filter from "../organisms/FIlter";

const booksData = [
  {
    id: 1,
    imgUrl: "/images/books/6.png",
    bookName: "The Divine Comedy",
    bookAuthor: "Dante Alighieri",
    isBookMarked: false,
    star: 4,
    price: 26,
  },
  {
    id: 2,
    imgUrl: "/images/books/7.png",
    bookName: "Harry Potter and the Cursed Child",
    bookAuthor: "J.k rowling",
    isBookMarked: false,
    star: 4,
    price: 23,
  },
  {
    id: 3,
    imgUrl: "/images/books/8.png",
    bookName: "A Dream Within a Dream",
    bookAuthor: "Edgar Allan Poe",
    isBookMarked: true,
    star: 4,
    price: 6,
  },
  {
    id: 4,
    imgUrl: "/images/books/9.png",
    bookName: "Modern Man In Search of a Soul",
    bookAuthor: "Carl Jung",
    isBookMarked: false,
    star: 4,
    price: 26,
  },
  {
    id: 5,
    imgUrl: "/images/books/10.png",
    bookName: "Thus Spoke Zarathustra",
    bookAuthor: "Friedrich Nietzsche",
    isBookMarked: true,
    star: 4,
    price: 12,
  },
  {
    id: 6,
    imgUrl: "/images/books/11.png",
    bookName: "The Myth of Sisyphus",
    bookAuthor: "Albert Camus",
    isBookMarked: false,
    star: 4,
    price: 10,
  },
  {
    id: 7,
    imgUrl: "/images/books/12.png",
    bookName: "Sherlock Holmes",
    bookAuthor: "Sir Arthur Conan Doyle",
    isBookMarked: false,
    star: 4,
    price: 54,
  },
  {
    id: 8,
    imgUrl: "/images/books/13.png",
    bookName: "It",
    bookAuthor: "Stephen King",
    isBookMarked: false,
    star: 4,
    price: 39,
  },
];

const FilterBooks = () => {
  return (
    <>
      <Filter />
      <FilterWrapper>
        {booksData.map((item) => (
          <FilterItemCont key={item.id}>
            <FilterImg src={item.imgUrl} alt={item.bookName} />
            <FilterItemInfo>
              <ItemTitle>{item.bookName}</ItemTitle>
              <ItemAuthor>{item.bookAuthor}</ItemAuthor>
              <StarCont>
                <StarImg src="/icons/star.svg" alt="star" />
                <StarParag>{item.star}/5</StarParag>
              </StarCont>
            </FilterItemInfo>
            <RightInfoCont>
              <Boockmark active={item.isBookMarked}></Boockmark>
              <PriceText>{item.price}$</PriceText>
            </RightInfoCont>
          </FilterItemCont>
        ))}
      </FilterWrapper>
    </>
  );
};

export default FilterBooks;

const FilterWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

const FilterItemCont = styled.div`
  width: 320px;
  display: flex;
  gap: 10px;
`;
const FilterImg = styled.img`
  width: 70px;
  height: 100px;
`;
const FilterItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 203px;
`;
const ItemTitle = styled.h5`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  color: rgba(255, 255, 255, 0.87);
`;
const ItemAuthor = styled.h6`
  font-style: italic;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  margin-top: 5px;

  color: rgba(255, 255, 255, 0.32);
`;
const StarCont = styled.div`
  margin-bottom: 5px;
  padding: 3px 8px;
  max-height: 21px;
  display: flex;
  align-items: center;
  width: min-content;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 60px;
`;
const StarImg = styled.img`
  width: 8px;
  height: 8px;
`;
const StarParag = styled.p`
  margin-left: 5px;
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;

  color: rgba(255, 255, 255, 0.32);
`;

const RightInfoCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;
const Boockmark = styled.div<{ active?: boolean }>`
  width: 12px;
  height: 16px;

  background-image: ${(props) =>
    props.active ? "url(/icons/bookmark.svg)" : "url(/icons/isbookmark.svg)"};

  &:hover {
    background-image: ${(props) =>
      props.active
        ? "url(/icons/bookmarkhover.svg)"
        : "url(/icons/isbookmarkhover.svg)"};
  }
`;
const PriceText = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;

  color: rgba(255, 255, 255, 0.87);
`;
