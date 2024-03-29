import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from "./serviceWorker";
import { StoreProvider } from "./Store";
// import Maintain from './components/Maintenance';
import Home from "./components/Home";
// import ProjectDetails from './components/ProjectDetails';
import AllBlogs from "./components/Blog/AllBlogs";
// import BlogDetails from "./components/Blog/BlogDetails";
import { ScrollIcon } from "./components/ScrollIcon";
import Footer from "./components/Footer";
import MyNavBar from "./components/MyNavBar";
import ContactPage from "./components/ContactPage";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Extracurricular from "./components/Extracurricular";

ReactDOM.render(
  <StoreProvider>
    <BrowserRouter>
      {/* <Maintain /> */}
      <MyNavBar />
      <div className="content">
        <Switch>
          <App path="/">
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/project/:slug" component={ProjectDetails}/> */}
            <Route exact path="/articles" component={AllBlogs} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/education" component={Education} />
            <Route exact path="/experience" component={Experience} />
            <Route exact path="/extracurricular" component={Extracurricular} />
            {/* <Route exact path="/articles/:slug" component={BlogDetails} /> */}
          </App>
        </Switch>
        <ScrollIcon />
        <Footer name="Jenny Chen" />
      </div>
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
