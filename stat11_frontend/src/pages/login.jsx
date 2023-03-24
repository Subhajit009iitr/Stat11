import React from 'react'
import { Box, Link, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/Logo.svg'
import batter from '../assets/Batter.svg'

function Login() {
  const navigate = useNavigate()

  const centerAlignBoxProps = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }

  return (
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
          width: "87.5%"
        }}
        alt="Batter"
        src={batter}
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
        <Box>Form</Box>
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
            New User?
          </Typography>
          <Link
          component="button"
          onClick={() => navigate('/signup')}
          >
            <Typography
            variant='h6'
            color='hint.main'
            sx={{
              marginRight: "4rem"
            }}
            >
              Sign Up
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default Login