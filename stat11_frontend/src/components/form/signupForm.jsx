import React, { useState } from 'react'
import { Box, Button, Divider, Link, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import playerTypes from '../../constants/playerTypes'
import { checkBoxFormFieldGenerator, selectFormFieldGenerator, textFormFieldGenerator } from './genericFormFieldGenerators'
import { useDispatch } from 'react-redux'
import { showSnackbar, signupUser } from '../../features/auth/authSlice'

function SignupForm() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [isPlayer, setIsPlayer] = useState(false)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [playerType, setPlayerType] = useState('')

    const validateEmail = () => {
      if(email==='') return true

      var emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      if(emailReg.test(email)) return true
      return false
    }

    const validatePass = () => {
      if(pass==='') return true

      var passReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      if(passReg.test(pass)) return true
      return false
    }

    const validateConfirmPass = () => {
      if(confirmPass==='') return true

      if(confirmPass===pass) return true
      return false
    }

    const signUpClickHandler = () => {
      if(validateEmail() && validatePass() && validateConfirmPass()){
        dispatch(
          signupUser({
            username: username,
            email: email,
            password: pass,
            is_player: isPlayer,
            player_type: playerType
          })
        )
        // navigate('/login')
      }
      // dispatch(
      //   showSnackbar(true)
      // ) 
    }

    const playerTypeFormField = isPlayer ?
    selectFormFieldGenerator(
      'Player Type',
      playerTypes,
      playerType,
      setPlayerType
    ) :
    <></>

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
                Thank you for joining!
            </Typography>
          </Box>
            {textFormFieldGenerator(
              'Username',
              username,
              setUsername
            )}
            {textFormFieldGenerator(
              'Email-ID',
              email,
              setEmail,
              validateEmail,
              "Invalid email format"
            )}
            {textFormFieldGenerator(
              'Password',
              pass,
              setPass,
              validatePass,
              "Invalid password format"
            )}
            {textFormFieldGenerator(
              'Confirm Password',
              confirmPass,
              setConfirmPass,
              validateConfirmPass,
              "Confirm password doesn't match password"
            )}
            <Box
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                margin: "0.8rem 0"
            }}
            >
                {checkBoxFormFieldGenerator(
                  <Typography
                  variant='body1'
                  color='hint.dark'
                  >
                      Are you a player?
                  </Typography>,
                  isPlayer,
                  setIsPlayer
                )}
            </Box>
            {playerTypeFormField}
            <Button
            variant='contained'
            color='primary'
            disableElevation={true}
            disabled={false}
            sx={{
              borderRadius: 8,
              width: "70%",
            }}
            onClick={signUpClickHandler}
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

export default SignupForm