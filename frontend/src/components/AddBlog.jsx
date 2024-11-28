import React, { useState } from "react";
import { Button, TextField, Box, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const [post, setPost] = useState({});
  const navigate = useNavigate();
  const inputHandler = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const addData = () => {
    axios
      .post("/api/add", post)
      .then((res) => {
        alert(res.data.message);
        navigate("/blogs");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "2rem",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "600px",
          padding: "2rem",
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h4" color="purple" align="center" gutterBottom>
          Add a New Blog Post
        </Typography>

        <TextField
          fullWidth
          variant="outlined"
          label="Post Title"
          name="title"
          onChange={inputHandler}
          sx={{ marginBottom: "1rem" }}
        />
        <TextField
          fullWidth
          multiline
          rows={8}
          variant="outlined"
          label="Write your Post"
          name="post"
          onChange={inputHandler}
          sx={{ marginBottom: "1rem" }}
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Image URL"
          name="image"
          onChange={inputHandler}
          sx={{ marginBottom: "1.5rem" }}
        />
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          onClick={addData}
          sx={{
            padding: "0.75rem",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.1)",
            },
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default AddBlog;
