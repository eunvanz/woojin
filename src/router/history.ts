import { createBrowserHistory } from "history";

const { NODE_ENV, REACT_APP_BASE_PATH } = process.env;

export default createBrowserHistory({
  basename: NODE_ENV === "production" ? REACT_APP_BASE_PATH : ""
});
