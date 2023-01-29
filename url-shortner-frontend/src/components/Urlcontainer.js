import React, { useState, useEffect } from "react";
import UrlAddItem from "./UrlAddItem";
import UrlList from "./UrlList";
import axios from "../config/axios";
const Urlcontainer = (props) => {
  const [urls, setUrls] = useState([]);
  useEffect(() => {
    axios
      .get("/api/urlList")
      .then((res) => setUrls(res.data))
      .catch((err) => console.log(err));
  }, []);
  const handleUrls = (Url, action) => {
    switch (action) {
      case "ADD":
        setUrls([...urls, { ...Url }]);
        break;
      case "DELETE":
        setUrls(
          urls.filter((url) => {
            return url._id !== Url._id;
          })
        );
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <UrlAddItem handleUrls={handleUrls} />
      <UrlList urls={urls} handleUrls={handleUrls} />
    </div>
  );
};
export default Urlcontainer;
