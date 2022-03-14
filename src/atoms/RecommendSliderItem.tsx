import React from "react";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";

type RecommendSliderItemProps = {
  imgUrl: string;
  star: number;
  bookName: string;
  authorName: string;
};

const RecommendSliderItem: React.FC<RecommendSliderItemProps> = ({
  imgUrl,
  star,
  bookName,
  authorName,
}) => {
  return (
    <RecommendItem>
      <RecommendItmeImg src={imgUrl} alt={bookName} />
      <RecommendStars>
        <RecommentdStar />
        <RecommentdStar />
        <RecommentdStar />
        <RecommentdStar />
        <RecommentdStar />
      </RecommendStars>
      <BookName>{bookName}</BookName>
      <BookAuthor>{authorName}</BookAuthor>
    </RecommendItem>
  );
};

export default RecommendSliderItem;

const RecommendItem = styled.div`
  padding: 10px 10px 5px 10px;
  max-width: 129px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RecommendItmeImg = styled.img`
  width: 89px;
  height: 128px;
  object-fit: cover;
  border-radius: 5px;
`;
const RecommendStars = styled.div``;
const RecommentdStar = styled.img``;
const BookName = styled.h5`
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height */

  text-align: center;

  color: rgba(255, 255, 255, 0.87);
`;
const BookAuthor = styled.h6`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height */

  text-align: center;

  color: rgba(255, 255, 255, 0.32);
`;
