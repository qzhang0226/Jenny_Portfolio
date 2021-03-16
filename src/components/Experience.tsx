import * as React from "react";
// import { IAppProps } from "../interfaces";
import ExperienceIcon from "../assets/icons/profile-icon.PNG";
import styled from "styled-components";

export default function Experience(props: any): JSX.Element {
  //   const { data } = props;

  //   const experienceIcon = require("../assets/icons/profile-icon.PNG");

  return (
    <ExperienceWrapper>
      <div className="container">
        <div className="profile_container">
          {/* <img src={item.postImage} alt="my profile"/> */}
          <div className="profile_title">PROFESSIONAL HISTORY</div>
          <div className="profile_subtitle">My Experience</div>
        </div>
        <div className="row">
          <div className="col-md-1 col-sm-12 col-xs-12">
            <img src={ExperienceIcon} alt="experience icon" />
          </div>
          <div className="col-md-3 col-sm-12 col-xs-12">
            <div>Somnia Inc., Harrison, NY</div>
            <div>In-House Corporate Legal Intern & Consultant</div>
            <div>January – September 2020</div>
          </div>
          <div className="col-md-8 col-sm-12 col-xs-12">
            <div className="text-left mb-4">
              <div>
                &#8226; Drafted and reviewed hundreds of employment contracts
                and contract amendments for anesthesiologists and CRNAs.
              </div>
              <div>
                &#8226; Completed the Corporation Annual Compliance project –
                Compliance Manuals, Memos, HIPAA policy and training, etc.
              </div>
              <div>
                &#8226; Conducted legal research and drafted memos. Worked on
                corporate governance management.
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-1 col-sm-12 col-xs-12">
            <img src={ExperienceIcon} alt="experience icon" />
          </div>
          <div className="col-md-3 col-sm-12 col-xs-12">
            <div>Suffolk County District Attorney’s Office, Suffolk, NY</div>
            <div>2020 Fall Internship Seminar Program</div>
            <div>September –November 2020</div>
          </div>
          <div className="col-md-8 col-sm-12 col-xs-12">
            <div className="text-left mb-4">
              <div>
                &#8226; Participated in a 10-week legal training program.
              </div>
              <div>
                &#8226; Observed arraignments in the Suffolk County District
                Court on a weekly basis.
              </div>
              <div>
                &#8226; Participated in legal seminars & lectures about the DA’s
                office and criminal justice system issues.
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-1 col-sm-12 col-xs-12">
            <img src={ExperienceIcon} alt="experience icon" />
          </div>
          <div className="col-md-3 col-sm-12 col-xs-12">
            <div>Alpine Law PLLC, New York, NY</div>
            <div>Legal Research Intern</div>
            <div>May – August 2020</div>
          </div>
          <div className="col-md-8 col-sm-12 col-xs-12">
            <div className="text-left mb-4">
              <div>
                &#8226; Drafted legal memos and conducted research on securities
                regulations, BVI and HK offshore companies, EU countries and US
                tax treaty, US corporate tax, LLC domestic conversion, etc.
              </div>
              <div>&#8226; Drafted law firm website articles, etc.</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-1 col-sm-12 col-xs-12">
            <img src={ExperienceIcon} alt="experience icon" />
          </div>
          <div className="col-md-3 col-sm-12 col-xs-12">
            <div>
              Elisabeth Haub School of Law at Pace University, White Plains, NY
            </div>
            <div>Research Assistant, Trusts & Estates Research Network</div>
            <div>Fall 2019</div>
          </div>
          <div className="col-md-8 col-sm-12 col-xs-12">
            <div className="text-left mb-4">
              <div>
                &#8226; Conducted research into citation practices of probate
                courts under supervision of Professor Crawford.
              </div>
              <div>
                &#8226; Prepared empirical and qualitative evaluations of
                judicial opinions covering full array of issues in wills, trusts
                and estates cases.
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-1 col-sm-12 col-xs-12">
            <img src={ExperienceIcon} alt="experience icon" />
          </div>
          <div className="col-md-3 col-sm-12 col-xs-12">
            <div>New York State Division of Human Rights, White Plains, NY</div>
            <div>Legal Intern</div>
            <div>May – August 2018</div>
          </div>
          <div className="col-md-8 col-sm-12 col-xs-12">
            <div className="text-left mb-4">
              <div>
                &#8226; Investigated in 30+ employment discrimination cases.
              </div>
              <div>
                &#8226; Drafted case summary reports and determinations.
              </div>
              <div>&#8226; Utilized CMS system to manage cases.</div>
              <div>
                &#8226; Conducted interviews with Complaints and Witnesses.
              </div>
              <div>
                &#8226; Requested legal documents and additional information
                from both parties or attorneys and decided whether the case has
                a probable cause.
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-1 col-sm-12 col-xs-12">
            <img src={ExperienceIcon} alt="experience icon" />
          </div>
          <div className="col-md-3 col-sm-12 col-xs-12">
            <div>Mass Energy Consumers Alliance, Boston, MA</div>
            <div>Green Power Marketing and Communication Intern</div>
            <div>January – July 2017</div>
          </div>
          <div className="col-md-8 col-sm-12 col-xs-12">
            <div className="text-left mb-4">
              <div>
                &#8226; Conducted research on Massachusetts renewable energy
                policies.
              </div>
              <div>
                &#8226; Planned renewable energy tours and represented MECA at
                events.
              </div>
              <div>&#8226; Updated MECA website information via Hub Spot.</div>
              <div>
                &#8226; Managed customer data by using structured query language
                (SQL).
              </div>
              <div>
                &#8226; Professionally communicated with customers and
                environmentalists orally and in writing.
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-1 col-sm-12 col-xs-12">
            <img src={ExperienceIcon} alt="experience icon" />
          </div>
          <div className="col-md-3 col-sm-12 col-xs-12">
            <div>
              Volunteer Lawyers Project of the Boston Bar Association, Boston,
              MA
            </div>
            <div>Administrative Assistant</div>
            <div>Fall 2016</div>
          </div>
          <div className="col-md-8 col-sm-12 col-xs-12">
            <div className="text-left mb-4">
              <div>
                &#8226; Worked under the supervision of a licensed attorney
                director.
              </div>
              <div>
                &#8226; Performed client intake interviews and other tasks.
              </div>
              <div>&#8226; Managed case management database.</div>
              <div>
                &#8226; Provided translation services between English, Mandarin,
                and Cantonese.
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-1 col-sm-12 col-xs-12">
            <img src={ExperienceIcon} alt="experience icon" />
          </div>
          <div className="col-md-3 col-sm-12 col-xs-12">
            <div>OTHER EXPERIENCE</div>
          </div>
          <div className="col-md-8 col-sm-12 col-xs-12">
            <div className="text-left mb-4">
              <div>
                &#8226; Administration and Finance Office Assistant, Boston
                Cares, Boston, MA (2016)
              </div>
              <div>
                &#8226; Edward M. Kennedy Institute for the US Senate, Boston,
                MA (2016-2017).
              </div>
              <div>&#8226; Environmental Voter Project, Boston, MA (2016)</div>
              <div>&#8226; Oregon State Capitol, Salem, OR (2014)</div>
              <div>
                &#8226; Campaign for Senate President Peter Courtney, Oregon
                State Legislature, Salem, OR (2014)
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </ExperienceWrapper>
  );
}

const ExperienceWrapper = styled("section")`
  background-color: var(--mainBlue);
  height: auto;
  padding: 100px 0;
  .container {
    text-align: center;
  }
  img {
    width: 200px;
    height: 200px;
  }
  .profile_title {
    font-size: 2.5em;
    padding-top: 30px;
  }
  .profile_subtitle {
    font-size: 1.2em;
  }
  .col-md-1 {
    padding-top: 5px;
  }
  .col-md-1 img {
    width: 50%;
    height: auto;
  }
  .row {
    margin: 0 auto;
    padding-top: 3rem;
  }
  @media only screen and (max-width: 767px) {
    .row {
      padding-top: 2rem;
    }
    .row .col-md-1 img {
      width: 5%;
      height: auto;
    }
    .col-sm-12 {
      margin-top: 1.5rem;
    }
  }
`;
