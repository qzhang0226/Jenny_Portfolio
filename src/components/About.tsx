import * as React from "react";
import TopBgImg from "../assets/icons/home-law-bgimg.jpg";
import { IAppProps } from "../interfaces";
import styled from "styled-components";

export default function About(props: IAppProps): JSX.Element {
  const { data } = props;
  return (
    <CardWrapper>
      <div className="image_container">
        <img src={TopBgImg} alt="about" />
        <div className="img_content">
          <h1>Welcome to Jenny's Law Blog</h1>
        </div>
      </div>
      {data ? (
        <div className="container">
          <div className="col-md-8 offset-md-2">
            <div className="header_content">{data.acf.title}</div>
            <div className="story_content">{data.acf.content}</div>
          </div>
        </div>
      ) : (
        <div>321</div>
      )}
    </CardWrapper>
  );
}

const CardWrapper = styled("section")`
  margin-bottom: 100px;
  .image_container {
    background-color: var(--mainDark);
    text-align: center;
    max-height: 650px;
    overflow: hidden;
    position: relative;
  }
  img {
    opacity: 0.9;
    width: 100%;
  }
  .img_content {
    color: var(--mainWhite);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .container {
    margin-top: 100px;
    height: auto;
  }
  .header_content {
    font-size: 1.13em;
    padding-bottom: 1em;
  }
  .story_content {
    line-height: 1.8em;
  }
`;
