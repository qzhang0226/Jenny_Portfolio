import React from "react";
import styled from "styled-components";
import Contact from "./Contact";
import weChatImg from "../assets/icons/wechat.png";

export default function ContactPage() {
  return (
    <>
      <ContactWrapper className="row">
        <div className="contact col-md-6">
          {" "}
          <div className="container contactContainer offset-md-4 col-md-8 col-sm-12">
            {" "}
            <div className="contactTitle">Contact Information</div>
            <div className="phone mb-4">
              <i className="fas fa-phone mr-2" />
              Phone: 617-505-8876
            </div>
            <div className="email mb-4">
              <i className="fas fa-envelope mr-2" />
              Email: JC6175058876@gmail.com
            </div>
            <div className="email mb-4">
              <i className="fab fa-weixin mr-2" />
              WeChat: cjn413328235
              <img src={weChatImg} alt="wechat" className="weChat mr-2 mt-2" />
            </div>
            <div className="linkedIn mb-4">
              <i className="fab fa-linkedin mr-2" />
              <a
                href="https://www.linkedin.com/in/jenny-chen-6175058876/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn: www.linkedin.com/in/jenny-chen-6175058876/
              </a>
            </div>
            <div className="address">
              <i className="fas fa-home mr-2" />
              Address: New York, NY
            </div>
          </div>
        </div>
        <div className="contactForm col-md-6">
          {" "}
          <Contact />
        </div>
      </ContactWrapper>
    </>
  );
}

const ContactWrapper = styled("div")`
  margin: auto 0;
  background-color: #f7f7f7;
  .contact {
    margin: 100px 0;
  }
  .contactContainer {
    text-align: left;
  }
  .contactTitle {
    font-size: 2.5em;
    margin-bottom: 1em;
    font-weight: lighter;
  }
  .weChat {
    width: 30%;
    height: auto;
    display: block;
  }
`;
