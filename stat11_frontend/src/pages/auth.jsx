import React, { useState } from 'react'
import { Box, Link, Typography } from '@mui/material'
import logo from '../assets/Logo.svg'
import batter from '../assets/Batter.svg'
import stumps from '../assets/FallingStumps.svg'
import LoginForm from '../components/form/loginForm'
import SignupForm from '../components/form/signupForm'
import { useDispatch, useSelector } from 'react-redux'
import { showSnackbar, switchAuthPage } from '../features/auth/authSlice'
import MySnackbar from '../components/snackbar'

function Auth() {
  const authState = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const centerAlignBoxProps = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }

  const illustration = authState.onLogin ? batter : stumps

  const changeAuthText = authState.onLogin ? "New User?" : "Already a User?"

  const changeAuthTo = authState.onLogin ? "Sign Up" : "Login"

  const authForm = authState.onLogin ? <LoginForm /> : <SignupForm />

  const switchPage = () => {
    dispatch(
      switchAuthPage(!authState.onLogin)
    )
  }

  const onSnackbarCloseHandler = () => {
    dispatch(
      showSnackbar(false)
    )
  }

  return (
    <>
      <Box
      sx={{...{
        height: "100vh",
        backgroundColor: "primary.main",
      },
      ...centerAlignBoxProps}}
      >
        <Box
        sx={{...{
          width: "55%",
          height: "100%",
          backgroundColor: "transparent",
        },
        ...centerAlignBoxProps}}
        >
          <Box
          component="img"
          sx={{
            width: "60%",
            maxHeight: "90%"
          }}
          alt="Illustration"
          src={illustration}
          />
        </Box>
        <Box
        sx={{
          width: "45%",
          height: "100%",
          backgroundColor: "background.default",
          borderRadius: "2.4rem 0 0 2.4rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        >
          <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            width: "100%",
            height: "7.5%",
            marginTop: "4rem"
          }}
          >
            <Box
            component="img"
            sx={{
              height: "100%",
              marginRight: "4rem"
            }}
            alt="Logo"
            src={logo}
            />
          </Box>
          {authForm}
          <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            paddingBottom: "4rem",
          }}
          >
            <Typography
            variant='h6'
            color='hint.main'
            sx={{
              marginRight: "0.4rem"
            }}
            >
              {changeAuthText}
            </Typography>
            <Link
            component="button"
            onClick={switchPage}
            >
              <Typography
              variant='h6'
              color='hint.main'
              sx={{
                marginRight: "4rem"
              }}
              >
                {changeAuthTo}
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
      <MySnackbar
      open={authState.openAuthSnackbar}
      onClose={onSnackbarCloseHandler}
      severity={authState.error ? "error" : "success"}
      message={authState.message}
      />
    </>
  )
}

export default Auth