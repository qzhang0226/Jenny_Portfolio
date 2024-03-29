export const getBaseUrl = () => {
  var prodBaseUrl = process.env.REACT_APP_API_BASE_URL;
  // var prodBaseUrl = "http://localhost:3002/";
  // var prodBaseUrl = process.env.REACT_APP_API_BASE_DEV_URL;
  return prodBaseUrl;
};

export const getWpBaseUrl = () => {
  switch (process.env.REACT_APP_DEV_ENV) {
    case "0":
      var wpDevBaseUrl = process.env.REACT_APP_WP_DEV_BASE_URL;
      return wpDevBaseUrl;
    case "1":
      var wpProdBaseUrl = process.env.REACT_APP_WP_PROD_BASE_URL;
      return wpProdBaseUrl;
    default:
      break;
  }
};

const url = "https://qzhangwp.com/wp-json/wp/v2/jianing_home";

export const fetchHomeData = async (dispatch: any) => {
  const data = await fetch(url);
  const dataJSON = await data.json();

  return dispatch({
    type: "FETCH_HOME_DATA",
    payload: dataJSON,
  });
};

export const fetchAllBlogs = async (dispatch: any) => {
  const WPURL = "https://qzhangwp.com/wp-json/wp/v2/jianing_blog";
  const blogData = await fetch(WPURL);
  const blogDataJSON = await blogData.json();

  return dispatch({
    type: "FETCH_BLOGS_DATA",
    payload: blogDataJSON,
  });
};

export const submitForm = async (formObj: object, dispatch: any) => {
  const settings = {
    method: "POST",
    headers: {
      // Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formObj),
  };
  try {
    const URL = `${getBaseUrl()}contact`;
    const data = await fetch(URL, settings);
    await data.json();
    return dispatch({
      type: "POST_FORM_DATA",
      payload: "Thanks for submitting!",
    });
  } catch (err) {
    return err;
  }
};

export const fetchProjectDetails = async (name: string, dispatch: any) => {
  const URL = `${getBaseUrl()}project/${name}`;
  const data = await fetch(URL);
  const dataJSON = await data.json();
  return dispatch({
    type: "FETCH_PROJECT_DETAILS_DATA",
    payload: dataJSON,
  });
};

export const fetchBlogDetails = async (slug: string, dispatch: any) => {
  const WPURL = `${getWpBaseUrl()}jianing_blog?slug=${slug}`;
  const data = await fetch(WPURL);
  const dataJSON = await data.json();
  return dispatch({
    type: "FETCH_BLOG_DETAILS_DATA",
    payload: dataJSON[0],
  });
};

export const cleanUpBlogData = async (dispatch: any) => {
  return dispatch({
    type: "FETCH_BLOG_DETAILS_DATA",
    payload: {},
  });
};
export const cleanProjectDetails = async (dispatch: any) => {
  return dispatch({
    type: "FETCH_PROJECT_DETAILS_DATA",
    payload: {},
  });
};
