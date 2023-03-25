import React, { useState } from 'react'
import { Box, Button, Checkbox, Divider, FormControl, FormControlLabel, InputLabel, Link, MenuItem, Select, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function SignupForm() {
    const navigate = useNavigate()
    const [isPlayer, setIsPlayer] = useState(false)

    const isPlayerChangeHandler = (event) => {
        setIsPlayer(event.target.checked)
    }

    const signUpClickHandler = () => {
        console.log("Sign me up!")
    }

    const playerTypeInputField = isPlayer ?
    <FormControl 
    fullWidth
    sx={{
        marginBottom: "1.6rem"
    }}
    >
        <InputLabel id='type'>Player Type</InputLabel>
        <Select 
        required
        label="Season type"
        variant='outlined'
        >
            <MenuItem value={'batter'}>Batter</MenuItem>
            <MenuItem value={'bowler'}>Bowler</MenuItem>
            <MenuItem value={'all_rounder'}>All-Rounder</MenuItem>
        </Select>
    </FormControl> :
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
           <TextField 
            required={true}
            label='Username' 
            type='text' 
            placeholder='Username' 
            variant='outlined'
            fullWidth={true}
            color='hint'
            error={false}
            onChange={() => console.log("Yah")}
            sx={{
              margin: "0.8rem 0 0.4rem 0"
            }}
            />
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
            sx={{
              margin: "0.8rem 0"
            }}
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
            sx={{
              margin: "0.8rem 0"
            }}
            />
            <TextField 
            required={true}
            label='Confirm Password' 
            type='text' 
            placeholder='Confirm Password' 
            variant='outlined'
            fullWidth={true}
            color='hint'
            error={false}
            onChange={() => console.log("Yah")}
            sx={{
              margin: "0.8rem 0"
            }}
            />
            <Box
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                margin: "0.8rem 0"
            }}
            >
                <FormControlLabel 
                label={
                    <Typography
                    variant='body1'
                    color='hint.dark'
                    >
                        Are you a player?
                    </Typography>
                }
                control={
                    <Checkbox 
                    checked={isPlayer}
                    onChange={isPlayerChangeHandler}
                    />
                }
                />
            </Box>
            {playerTypeInputField}
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