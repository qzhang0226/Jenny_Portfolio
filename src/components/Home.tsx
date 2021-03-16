import React from "react";
import TopBgImg from "../assets/icons/home-law-bgimg.jpg";
import { IAppProps } from "../interfaces";
import { fetchHomeData } from "../actions/Action";
import { Store } from "../Store";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Story from "./Story";
import Contact from "./Contact";
import Map from "./Map";
import Blogs from "./Blog/BlogSection";

export default function Home() {
  const { state, dispatch } = React.useContext(Store);
  React.useEffect(() => {
    fetchHomeData(dispatch);
  }, [dispatch]);

  document.title = "Jenny Chen - home";

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aboutProps: IAppProps = {
    data: state.home[0],
    store: { state, dispatch },
  };

  // const experienceProps: IAppProps = {
  //   data: state.home.profile,
  //   store: { state, dispatch },
  // };

  // const projectProps: IAppProps = {
  //   data: state.home.project,
  //   store: { state, dispatch },
  // };

  // const storyProps: IAppProps = {
  //   data: state.home.quotation,
  //   store: { state, dispatch },
  // };

  // const blogProps: IAppProps = {
  //   data: state.home.blogs,
  //   store: { state, dispatch },
  // };

  return (
    <>
      <About {...aboutProps} />
      <Experience />
      {/* <Projects {...projectProps} /> */}
      {/* <Story {...storyProps} /> */}

      <Contact />
      {/* <Map /> */}
      {/* <Blogs {...blogProps} /> */}
    </>
  );
}
