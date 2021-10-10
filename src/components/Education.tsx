import React from "react";
import styled from "styled-components";
import PaceImg from "../assets/icons/pace_pic.jpg";
import WuImg from "../assets/icons/WU_pic.png";

export default function Education() {
  return (
    <>
      <EducationWrapper>
        <div className="row mb-5">
          {" "}
          <div className="imgCol col-md-6 col-sm-12 col-xs-12">
            <img src={PaceImg} alt="pace" className="paceImg" />
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12">
            <div className="disciption">
              {" "}
              <h2>Elisabeth Haub School of Law at Pace University</h2>
              <h5 className="">White Plains, New York</h5>
              <h5 className="mt-4">
                Juris Doctor, Degree received on December 2020
              </h5>
              <h5 className="mt-4">Business Law – Corporate Concentration.</h5>
            </div>
          </div>
        </div>
        <div className="row">
          {" "}
          <div className="imgCol col-md-6 col-sm-12 col-xs-12">
            <img src={WuImg} alt="pace" className="paceImg" />
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12">
            <div className="disciption">
              {" "}
              <h2>Willamette University</h2>
              <h5>Salem, Oregon</h5>
              <h5 className="mt-4">
                Bachelor of Arts in Political Science, Degree received on May
                2016
              </h5>
              <h5 className="mt-4">Activities:</h5>
              <h5 className="mt-2">
                <ul>
                  <li>Willamette Debate Team (2014-2016)</li>
                  <li>Philomathean Society, Treasurer (2015-2016)</li>
                  <li>Model United Nations (2015)</li>
                  <li>Outdoor Program, International Liaison (2013-2014)</li>
                </ul>
              </h5>
            </div>
          </div>
        </div>
      </EducationWrapper>
    </>
  );
}

const EducationWrapper = styled("div")`
  padding: 100px 100px;
  height: 100%;
  background-color: #f7f7f7;
  @media only screen and (max-width: 480px) {
    padding: 1.5rem 1.5rem;
    .disciption {
      display: block !important;
      margin-top: 1.5rem !important;
    }
  }
  .disciption {
    margin: auto;
  }
  .imgCol {
    text-align: center;
  }
  .paceImg {
    max-width: 100%;
    height: auto;
  }
  .logo {
    width: 10%;
    height: auto;
  }
  @media (min-width: 768px) {
    .paceImg {
      max-width: 65% !important;
      height: auto !important;
    }
  }
`;
