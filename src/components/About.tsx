import * as React from "react";
import TopBgImg from "../assets/icons/1213187010.jpg";
import { IAppProps } from "../interfaces";
import styled from "styled-components";

export default function About(props: IAppProps): JSX.Element {
  const { data } = props;
  return (
    <CardWrapper>
      <div className="image_container">
        <img src={TopBgImg} alt="about" />
        <div className="img_content">
          <h1>Welcome to Jenny's Website</h1>
        </div>
      </div>
      <div className="container">
        <div className="col-md-8 offset-md-2">
          <div className="header_content">About Me</div>
          <div className="story_content">
            Hi, my name is Jenny and welcome to my website! I graduated from
            Elisabeth Haub School of Law at Pace University (White Plains, New
            York), and currently work in a law firm in midtown New York City,
            NY, focus on M&A, corporate and SPAC areas. I fulfilled a Business
            law – Corporate concentration from my law school, and you can read
            my writing sample “Corporate Case Study: Smithfield Foods Inc.
            Acquisition by Shuanghui International and its Corporate Finance
            Strategy” for further details.
          </div>
          <div className="story_content pt-3">
            Please feel free to leave me a comment in my website “Contact”
            sub-page if you have any question or would like to get in touch.
          </div>
          <div className="story_content pt-3">Have a great day!</div>
        </div>
      </div>
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
