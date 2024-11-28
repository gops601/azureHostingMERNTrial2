import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Grid, Card, CardContent } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch all blogs from the backend
    axios
      .get("/api/blogs") // Ensure this URL is correct for your backend
      .then((res) => {
        console.log(res.data); // Check the response structure
        setBlogs(res.data); // Set the blogs to state
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id) => {
    // Send DELETE request to backend to delete the blog
    axios
      .delete(`/api/blogs/${id}`)
      .then((res) => {
        console.log(res.data);
        setBlogs(blogs.filter((blog) => blog._id !== id)); // Remove the deleted blog from the state
        alert("Blog deleted successfully");
      })
      .catch((err) => {
        console.error(err);
        alert("Error deleting blog");
      });
  };

  return (
    <Box sx={{ padding: "2rem" }}>
      <Typography variant="h4" color="primary" align="center" gutterBottom>
        All Blogs
      </Typography>
      <Grid container spacing={3}>
        {blogs.length === 0 ? (
          <Typography variant="h6" color="textSecondary" align="center">
            No blogs available.
          </Typography>
        ) : (
          blogs.map((blog) => (
            <Grid item xs={12} sm={6} md={4} key={blog._id}>
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" color="primary" gutterBottom>
                    {blog.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" mb={2}>
                    {blog.description}
                  </Typography>
                  {blog.image && (
                    <Box
                      sx={{
                        height: "200px", // Fixed height for images
                        overflow: "hidden",
                        textAlign: "center",
                        marginBottom: "1rem",
                      }}
                    >
                      <img
                        src={blog.image}
                        alt={blog.title}
                        style={{
                          width: "100%", // Make image width 100% to fill the container
                          height: "auto", // Maintain aspect ratio
                          objectFit: "cover", // Ensure the image covers the container without distortion
                        }}
                      />
                    </Box>
                  )}
                  <Box sx={{ marginTop: "1rem" }}>
                    {/* <Link to={`/view/${blog._id}`}>
                      <Button variant="outlined" color="primary">
                        Read More
                      </Button>
                    </Link> */}
                    <Button
                      variant="outlined"
                      color="error"
                      sx={{ marginLeft: "1rem" }}
                      onClick={() => handleDelete(blog._id)}
                    >
                      Delete
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default Blogs;
