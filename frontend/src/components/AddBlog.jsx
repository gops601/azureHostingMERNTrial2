import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import axios from "axios";
const AddBlog = () => {
  const [post, setPost] = useState();

  const inputHandler = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const addData = () => {
    console.log(post);
    axios
      .post("/api/add", post)
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div style={{ margin: "5%" }}>
      <TextField
        fullWidth
        variant="outlined"
        label="post title"
        name="title"
        onChange={inputHandler}
      />
      <br />
      <br />
      <TextField
        fullWidth
        multiline
        rows={10}
        variant="outlined"
        label="Type a post "
        name="post"
        onChange={inputHandler}
      />
      <br />
      <br />
      <TextField
        fullWidth
        variant="outlined"
        label="Image URL "
        name="image"
        onChange={inputHandler}
      />

      <br />
      <br />
      <br />
      <Button variant="contained" color="secondary" onClick={addData}>
        Submit
      </Button>
    </div>
  );
};

export default AddBlog;
