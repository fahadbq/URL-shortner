import React from "react";
import axios from "../config/axios";
const UrlItem = (props) => {
  const { url, handleUrls } = props;
  const deleteUrl = (id) => {
    axios.delete(`/api/url/${id}`).then((res) => {
      handleUrls(res.data, "DELETE");
    });
  };
  return (
    <div>
      <h2>
        {url.title}---{" "}
        <a
          href={`https://${url.originalUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {url.hashedUrl}
        </a>{" "}
        <button
          className="btn btn-dark"
          onClick={() => {
            deleteUrl(url._id);
          }}
        >
          Delete
        </button>
      </h2>
    </div>
  );
};
export default UrlItem;
