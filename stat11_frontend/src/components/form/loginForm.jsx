import React, { useState } from 'react'
import { Box, Button, Divider, Link, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { textFormFieldGenerator } from './genericFormFieldGenerators'

function LoginForm() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const loginClickHandler = () => {
    console.log("Log me in!")
  }

  return (
    <Box
    sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1,
        width: "70%"
    }}
    >
      <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-start"
       }}
      >
        <Typography
        variant='h2'
        gutterBottom={true}
        >
            Welcome back!
        </Typography>
      </Box>
        {textFormFieldGenerator(
          'Email-ID',
          email,
          setEmail
        )}
        {textFormFieldGenerator(
          'Password',
          pass,
          setPass
        )}
        <Link
        component="button"
        underline='hover'
        onClick={() => console.log("How dare u forget PASSWORD??")}
        sx={{
          marginTop: 4,
          marginBottom: 3
        }}
        >
            <Typography
            variant='h6'
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
          width: "70%",
        }}
        onClick={loginClickHandler}
        >
          <Typography
          variant='button'
          >
            Submit
          </Typography>
        </Button>
        <Divider
        sx={{
          width: "85%",
          backgroundColor: "hint",
          margin: "1.2rem 0"
        }}
        />
        <Link
        component="button"
        underline='always'
        onClick={() => navigate('/home')}
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