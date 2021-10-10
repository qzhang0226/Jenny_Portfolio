import React, { useState } from "react";
import styled from "styled-components";
import Certificate1 from "../assets/icons/Certificate1.jpg";
import Certificate2 from "../assets/icons/Certificate2.jpg";
import Certificate3 from "../assets/icons/Certificate3.jpg";
import DaSeminar from "../assets/icons/Jianing+Chen+DA+Seminar+-1.jpg";

export default function Extracurricular() {
  const [displayModal, setDisplayModal] = useState(false);
  const [displayImg, setDisplayImg] = useState("");

  const certificateList = [Certificate1, Certificate2, Certificate3];

  const onClick = (modalStatus: any, imgStatus: any) => {
    setDisplayModal(modalStatus);
    setDisplayImg(imgStatus);
  };

  return (
    <>
      <Wrapper>
        <div className="IrsCertifications">
          <h3>IRS VITA/TCE Certification</h3>
          <h5>
            The IRS's Volunteer Income Tax Assistance (VITA) and Tax Counseling
            for the Elderly (TCE) programs
          </h5>
          {certificateList.map((certificate) => (
            <>
              <img
                src={certificate}
                alt="certificate1 thumbnail"
                className="thumbnail mt-3 mr-3"
                onClick={() => onClick(!displayModal, certificate)}
              />
              <div
                className={`Modal ${
                  displayModal && displayImg === certificate
                    ? "Show certificate1"
                    : ""
                }`}
                onClick={() => onClick(!displayModal, "")}
              >
                <img
                  src={displayImg}
                  alt="Certificate1 modal"
                  onClick={() => onClick(!displayModal, "")}
                />
              </div>
              <div className={`Overlay ${displayModal ? "Show" : ""}`} />
              <div
                className={`Overlay ${displayModal ? "Show" : ""}`}
                onClick={() => onClick(!displayModal, "")}
              />
            </>
          ))}
          {/* <img
            src={Certificate1}
            alt="certificate1 thumbnail"
            className="thumbnail mt-3"
            onClick={() => onClick(!displayModal, Certificate1)}
          /> */}
          <div
            className={`Modal ${
              displayModal && displayImg === Certificate1
                ? "Show certificate1"
                : ""
            }`}
            onClick={() => onClick(!displayModal, "")}
          >
            <img
              src={displayImg}
              alt="Certificate1 modal"
              onClick={() => onClick(!displayModal, "")}
            />
          </div>
          <div className={`Overlay ${displayModal ? "Show" : ""}`} />
          <div
            className={`Overlay ${displayModal ? "Show" : ""}`}
            onClick={() => onClick(!displayModal, "")}
          />
        </div>

        <div className="IrsCertifications">
          <h3>2020 Fall Internship Seminar Program </h3>
          <h5>Suffolk County District Attorney’s Office, Suffolk, NY</h5>
          <img
            src={DaSeminar}
            alt="DaSeminar thumbnail"
            className="thumbnail mt-3"
            onClick={() => onClick(!displayModal, DaSeminar)}
          />
          <div
            className={`Modal ${
              displayModal && displayImg === DaSeminar ? "Show DaSeminar" : ""
            }`}
            onClick={() => onClick(!displayModal, "")}
          >
            <img
              src={displayImg}
              alt="DaSeminar modal"
              onClick={() => onClick(!displayModal, "")}
            />
          </div>
          <div className={`Overlay ${displayModal ? "Show" : ""}`} />
          <div
            className={`Overlay ${displayModal ? "Show" : ""}`}
            onClick={() => onClick(!displayModal, "")}
          />
        </div>

        <div className="IrsCertifications">
          <h3>National Committee on United States–China Relations</h3>
          <h4>U.S. Foreign Policy Colloquium (FPC) 2017 </h4>
          <h5>Washington, D.C., United States </h5>
          <h4>
            <a
              href="https://www.ncuscr.org/program/us-foreign-policy-colloquium"
              target="_blank"
              rel="noreferrer"
            >
              https://www.ncuscr.org/program/us-foreign-policy-colloquium{" "}
            </a>
          </h4>
        </div>
        <div className="IrsCertifications">
          <h3>American Bar Association</h3>
          <h4>20th Annual Law Student Tax Challenge</h4>
          <h4>JD Division</h4>
        </div>

        <div className="IrsCertifications">
          <h3>Membership </h3>
          <h4>American Bar Association (ABA) </h4>
          <ul className="abaList">
            <li>
              <h5>Taxation</h5>
            </li>
            <li>
              <h5>Young Lawyers Division</h5>
            </li>
          </ul>

          <h4>New York State Bar Association </h4>
          <h4>New York County Lawyers Association </h4>
          <h4>Westchester County Bar Association</h4>
          <h4>The Chinese Finance Association</h4>
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled("section")`
  padding: 100px 100px;
  height: 100%;
  background-color: #f7f7f7;
  img:hover {
    cursor: pointer;
  }
  .Modal {
    position: fixed;
    bottom: -15000vh;
    width: 100%;
    height: auto;
    left: 0;
    transition: bottom ease-out;
    z-index: 10;
  }
  .Modal.Show {
    text-align: center;
    bottom: 10%;
  }
  .Modal.Show img {
    width: 50%;
    height: auto;
  }
  .Modal.Show.DaSeminar {
    width: 60%;
    left: 20%;
  }
  .Modal.Show.DaSeminar img {
    width: 50%;
    height: 50%;
  }
  .Overlay {
    background-color: rgba(0, 0, 0, 0.55);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    display: none;
    z-index: 5;
  }

  .Overlay.Show {
    display: block;
  }
  .thumbnail {
    width: 10%;
    height: auto;
  }
  .IrsCertifications {
    margin-bottom: 5rem;
  }
  .IrsCertifications h4 a {
    text-decoration: underline !important;
  }
`;
