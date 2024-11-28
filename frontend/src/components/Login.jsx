import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button, TextField, Typography, Link } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addHandler = () => {
    axios
      .post("/api/login", user)
      .then((res) => {
        alert(res.data.message);
        navigate("/blogs");
      })
      .catch((err) => {
        setError("Login failed. Please check your credentials.");
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
          maxWidth: "400px",
          padding: "2rem",
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h4" color="purple" align="center" gutterBottom>
          Welcome to Blog App
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center" mb={2}>
          Please login to continue
        </Typography>

        <TextField
          fullWidth
          margin="normal"
          variant="outlined"
          label="Email"
          name="username"
          onChange={inputHandler}
        />
        <TextField
          fullWidth
          margin="normal"
          variant="outlined"
          label="Password"
          type="password"
          name="password"
          onChange={inputHandler}
        />

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
          Login
        </Button>

        <Typography
          variant="body2"
          align="center"
          sx={{ marginTop: "1rem", color: "text.secondary" }}
        >
          New here?{" "}
          <Link href="/sign" underline="hover" color="secondary">
            Create an account
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
