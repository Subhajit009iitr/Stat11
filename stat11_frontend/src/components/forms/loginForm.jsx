import { Box, Button, Divider, Link, TextField, Typography } from '@mui/material'
import React from 'react'

function LoginForm() {
  return (
    <Box
    sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1,
        // backgroundColor: "yellow",
        width: "70%"
    }}
    >
       <Typography
       variant='h2'
       gutterBottom={true}
       >
            Welcome back!
       </Typography>
       <TextField 
        required={true}
        label='Email-ID' 
        type='text' 
        placeholder='Email-ID' 
        variant='outlined'
        fullWidth={true}
        color='hint'
        error={false}
        onChange={() => console.log("Yah")}
        />
        <TextField 
        required={true}
        label='Password' 
        type='text' 
        placeholder='Password' 
        variant='outlined'
        fullWidth={true}
        color='hint'
        error={false}
        onChange={() => console.log("Yah")}
        />
        <Link
        component="button"
        underline='hover'
        onClick={() => console.log("How dare u forget PASSWORD??")}
        >
            <Typography
            variant='h6'
            gutterBottom={true}
            color='hint.light'
            >
                Forgot Password?
            </Typography>
        </Link>
        <Button
        variant='contained'
        color='primary'
        disableElevation={true}
        disabled={false}
        sx={{
          borderRadius: 8,
          width: "70%"
        }}
        >
          <Typography
          variant='button'
          >
            Submit
          </Typography>
        </Button>
        <Divider
        light={true}
        sx={{
          width: "85%",
          backgroundColor: "hint",
        }}
        />
        <Link
        component="button"
        underline='always'
        onClick={() => console.log("Go fast!")}
        >
            <Typography
            variant='h6'
            gutterBottom={true}
            color='hint.light'
            >
                Continue without login
            </Typography>
        </Link>
    </Box>
  )
}

export default LoginForm