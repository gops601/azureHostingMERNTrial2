import { Button, Grid, TextField, Typography, Box, Link } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState({});
  const [error, setError] = useState("");

  const inputHandler = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const addHandler = () => {
    axios
      .post("/api", users)
      .then((res) => {
        alert(res.data.message);
        navigate("/");
      })
      .catch((err) => {
        setError("Signup failed. Please try again.");
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
          Create an Account
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center" mb={2}>
          Fill in the details below to sign up
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              variant="outlined"
              onChange={inputHandler}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              variant="outlined"
              onChange={inputHandler}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Address"
              name="address"
              variant="outlined"
              multiline
              rows={3}
              onChange={inputHandler}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Username"
              name="username"
              variant="outlined"
              onChange={inputHandler}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              variant="outlined"
              onChange={inputHandler}
            />
          </Grid>
        </Grid>

        {error && (
          <Typography
            variant="body2"
            color="error"
            align="center"
            sx={{ marginTop: "0.5rem" }}
          >
            {error}
          </Typography>
        )}

        <Button
          fullWidth
          variant="contained"
          color="secondary"
          onClick={addHandler}
          sx={{ marginTop: "1.5rem", padding: "0.75rem" }}
        >
          Signup
        </Button>

        <Typography
          variant="body2"
          align="center"
          sx={{ marginTop: "1rem", color: "text.secondary" }}
        >
          Already have an account?{" "}
          <Link href="/" underline="hover" color="secondary">
            Back to Login
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Signup;
