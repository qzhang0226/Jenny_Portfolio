import React from "react";
import styled from "styled-components";
import { Store } from "../../Store";
import BlogCard from "./BlogCard";
import { fetchAllBlogs } from "../../actions/Action";
import moment from "moment";
import { Link } from "react-router-dom";

export default function AllBlogs(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  document.title = "Jenny Chen - Articles";

  React.useEffect(() => {
    fetchAllBlogs(dispatch);
  }, [dispatch]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { allBlog } = state;

  if (allBlog[0]) {
    return (
      <BlogListWrapper>
        <div className="container">
          <div className="all-posts">All Articles</div>
          {allBlog.map((blog: any) => {
            return (
              <div key={blog.id} className="row pb-4">
                <div className="col-md-6 col-sm-6 col-xs-12">
                  <BlogCard {...blog} page="All Blogs Page" />
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12 blog-desc">
                  <div className="top_info">
                    <img
                      src={blog.acf.profile_image.sizes.thumbnail}
                      alt={blog.acf.profile_image.alt}
                    />
                    <div className="post_basic_info">
                      <div>{blog.acf.author}</div>
                      {/* <div>{moment(blog.date_gmt).format("MMM Do, YY")}</div> */}
                    </div>
                  </div>
                  <a
                    href={blog.acf.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="pdf"
                  >
                    <div
                      className="project-title"
                      dangerouslySetInnerHTML={{ __html: blog.acf.title }}
                    />
                  </a>
                  {/* <div
                    className="excerpt"
                    dangerouslySetInnerHTML={{
                      __html: blog.excerpt.rendered,
                    }}
                  /> */}
                  {/* <div>
                    <a
                      href={blog.acf.pdf}
                      target="_blank"
                      rel="noreferrer"
                      className="pdf"
                    >
                      Click here to download PDF version
                    </a>
                  </div> */}
                  <hr />
                </div>
              </div>
            );
          })}
        </div>
      </BlogListWrapper>
    );
  }

  return <div className="loader container" />;
}

const BlogListWrapper = styled("section")`
  .all-posts {
    text-align: left;
    font-size: 1.2rem;
    color: #e6d6b3;
    margin: 80px 0 40px -15px;
  }
  .blog-desc {
    text-align: left;
    border-style: solid;
    border-width: 1px 1px 1px 0;
    border-color: #c8c8c8;
  }
  .top_info {
    position: relative;
    margin: 2rem;
  }
  .top_info img {
    height: 45px;
    width: 45px;
  }
  .post_basic_info {
    position: absolute;
    top: 25%;
    font-size: 0.5em;
    display: inline-block;
    padding-left: 1.5em;
  }
  .project-title {
    font-size: 1.5rem;
    font-style: normal;
    font-weight: normal;
    margin: 0 2rem 1rem 2rem;
    cursor: pointer;
  }
  .excerpt {
    margin: 0 2rem;
  }
  .pdf {
    margin: 0 2rem;
    color: #0056b3 !important;
    text-decoration: underline !important;
  }

  hr {
    display: none;
  }
  @media only screen and (min-width: 576px) {
    .col-md-6 {
      padding: 0 !important;
    }
    .col-sm-6 {
      padding: 0 !important;
    }
  }
  @media only screen and (max-width: 576px) {
    .blog-desc {
      border: none;
    }
    .all-posts {
      margin: 20px 0 30px 0px;
    }
    .top_info,
    .project-title,
    .excerpt .pdf {
      margin-left: 0;
      margin-right: 0;
    }
    hr {
      display: block;
      margin-top: 2rem;
    }
  }
`;
