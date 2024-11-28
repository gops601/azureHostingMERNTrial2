import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import {Link,useNavigate} from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();

  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const addHandler = () => {
    console.log(user);
    axios.post("/api/login",user)
    .then((res)=>{
      alert(res.data.message)
      navigate("/blogs")
    })
    .catch((err)=>{
      console.log(err)
    })
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        style={{ margin: "10% 20% 30% 40%" }}
      >
        <Typography variant="h5" style={{ color: "darkblue" }}>
          Blog App Login
        </Typography>
        <div>
          <TextField
            id="outlined-required"
            label="Email"
            name="username"
            onChange={inputHandler}
          />
        </div>
        <div>
          <TextField
            id="outlined-disabled"
            label="Password"
            type="password"
            name="password"
            onChange={inputHandler}
          />
        </div>
        <Button variant="contained" color="secondary" onClick={addHandler}>
          Login
        </Button>
        <br /><br /><br />
        <Typography>
          <Link to={'/sign'}>New users Click here</Link>
        </Typography>
      </Box>
    </div>
  );
};

export default Login;
