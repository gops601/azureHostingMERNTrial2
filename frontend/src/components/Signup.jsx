import { Button, Grid, Item, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import {Link,useNavigate} from "react-router-dom";
import axios from 'axios';
const Signup = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState();
  const inputHandler = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
    console.log(users);
  };

  const addHandler = ()=>{
    console.log("clicked",users);
    axios.post("/api",users)
    .then((res)=>{
      console.log(res);
      alert(res.data.message);
      navigate('/')
    })
    .catch((err)=>{
      console.log(err)
    })

  }
  return (
    <div style={{ margin: "10%" }}>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={6} md={6}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            onChange={inputHandler}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            onChange={inputHandler}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <TextField
            fullWidth
            label="Address"
            multiline
            rows={4}
            name="address"
            onChange={inputHandler}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <TextField
            fullWidth
            label="Username"
            name="username"
            onChange={inputHandler}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <TextField
            fullWidth
            label="Password"
            name="password"
            onChange={inputHandler}
          />
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid item xs={12}>
        <Button variant="contained" color="secondary" onClick={addHandler}>
          Signup
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Typography >
          <Link to={'/'}>
            Back to Login
          </Link>
        </Typography>

      </Grid>
    </div>
  );
};

export default Signup;
