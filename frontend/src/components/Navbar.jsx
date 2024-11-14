import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box  sx={{ flexGrow: 1 }}>
    <AppBar style={{backgroundColor:'purple'}} position="static">
     <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          BlogApp
        </Typography>
        <Button color="inherit"><Link style={{color:'white',textDecoration:'none'}}to={'/blogs'}>Blogs</Link></Button>
        <Button color="inherit"><Link style={{color:'white',textDecoration:'none'}} to={'/add'}>AddBlog</Link></Button>
        <Button color="inherit"><Link style={{color:'white',textDecoration:'none'}} to={'/'}>Logout</Link></Button>
        </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar