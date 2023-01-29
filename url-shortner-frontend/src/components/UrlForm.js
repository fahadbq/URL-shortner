import React, { useState } from "react";
const UrlForm = (props) => {
  const { formSubmit } = props;
  const [title, setTitle] = useState("");
  const [originalURL, setOrigalURL] = useState("");
  const handleChange = (e) => {
    switch (e.target.name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "originalURL":
        setOrigalURL(e.target.value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title,
      originalURL,
    };
    const reset = () => {
      setTitle("");
      setOrigalURL("");
    };
    formSubmit(formData, reset);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="tile">Title:</label>
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={handleChange}
          name="title"
          id="title"
        />
        <br />
        <br />
        <label htmlFor="originalURL">Original Url:</label>
        <input
          type="text"
          value={originalURL}
          onChange={handleChange}
          placeholder="Original Url"
          name="originalURL"
          id="originalURL"
        />
        <br />
        <br />
        <input type="submit" value="Save" className="btn btn-primary" />
      </form>
    </div>
  );
};
export default UrlForm;
