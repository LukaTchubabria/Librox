import React from "react";
import styled from "styled-components";
import Button from "../atoms/Button";

type WriterSUggestProps = {
  imgUrl: string;
  name: string;
  isFollow: boolean;
};

const WriterSuggest: React.FC<WriterSUggestProps> = ({
  imgUrl,
  name,
  isFollow,
}) => {
  return (
    <WriterSugCont>
      <div style={{ display: "flex", alignItems: "center" }}>
        <WriterSugImg src={imgUrl} alt={name} />
        <WriterSugName>{name}</WriterSugName>
      </div>
      <Button text={isFollow ? "Unfollow" : "Follow"} />
    </WriterSugCont>
  );
};

export default WriterSuggest;

const WriterSugCont = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WriterSugImg = styled.img`
  width: 50px;
`;

const WriterSugName = styled.h5`
  margin-left: 20px;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;

  color: rgba(255, 255, 255, 0.87);
`;
