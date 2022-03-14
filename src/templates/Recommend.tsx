import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import RecommendSliderItem from "../atoms/RecommendSliderItem";

const sliderData = [
  {
    id: 1,
    imgUrl: "/images/books/1.png",
    star: 4,
    bookName: "The Knight in t... ",
    authorName: "Shota Rustaveli",
  },
  {
    id: 2,
    imgUrl: "/images/books/2.png",
    star: 4,
    bookName: "Quidditch Thr...",
    authorName: "J.k rowling",
  },
  {
    id: 3,
    imgUrl: "/images/books/3.png",
    star: 4,
    bookName: "The Idiot",
    authorName: " Fyodor Dostoevs...",
  },
  {
    id: 4,
    imgUrl: "/images/books/4.png",
    star: 4,
    bookName: "Hamlet",
    authorName: "William Shakesp...",
  },
  {
    id: 5,
    imgUrl: "/images/books/5.png",
    star: 4,
    bookName: "The Great Gat",
    authorName: "F. Scott Fitzgerald",
  },
  {
    id: 5,
    imgUrl: "/images/books/5.png",
    star: 4,
    bookName: "The Great Gat",
    authorName: "F. Scott Fitzgerald",
  },
  {
    id: 5,
    imgUrl: "/images/books/5.png",
    star: 4,
    bookName: "The Great Gat",
    authorName: "F. Scott Fitzgerald",
  },
  {
    id: 5,
    imgUrl: "/images/books/5.png",
    star: 4,
    bookName: "The Great Gat",
    authorName: "F. Scott Fitzgerald",
  },
  {
    id: 5,
    imgUrl: "/images/books/5.png",
    star: 4,
    bookName: "The Great Gat",
    authorName: "F. Scott Fitzgerald",
  },
];

const Recommend = () => {
  return (
    <RecommendWrapper>
      <RecommendTitle>Recommend</RecommendTitle>
      <Swiper
        style={{ width: "100%", display: "grid", marginTop: 10 }}
        spaceBetween={10}
        cssMode={true}
        breakpoints={{
          "300": {
            slidesPerView: 5,
            spaceBetween: 4,
          },
          "600": {
            slidesPerView: 5,
            spaceBetween: 4,
          },
          "1200": {
            slidesPerView: 10,
            spaceBetween: 10,
          },
        }}
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
        mousewheel={true}
        keyboard={true}
      >
        {sliderData.map((item) => (
          <SwiperSlide style={{ display: "inline-grid" }} key={item.id}>
            <RecommendSliderItem
              imgUrl={item.imgUrl}
              star={item.star}
              bookName={item.bookName}
              authorName={item.authorName}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </RecommendWrapper>
  );
};

export default Recommend;

const RecommendWrapper = styled.div`
  overflow: hidden;
`;
const RecommendTitle = styled.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: rgba(255, 255, 255, 0.87);
`;
