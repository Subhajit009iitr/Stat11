import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openChooseBowlerDialog } from '../../features/scoreboard/bowlerScoreboardSlice'
import { selectFormFieldGenerator } from '../genericComponent/genericFormFieldGenerators'
import { getAllBowlers } from '../../features/player/playerSlice'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, Typography } from '@mui/material'
import { GrClose } from 'react-icons/gr'
import { standardAvatarListItemGenerator } from '../genericComponent/genericListGenerators'
import { openChooseBatterDialog } from '../../features/scoreboard/batterScoreboardSlice'

function ChooseBowlerDialog() {
    const bowlerScoreboardState = useSelector(state => state.bowlerScoreboard)
    const playerState = useSelector(state => state.player)
    const teamState = useSelector(state => state.team)
    const dispatch = useDispatch()

    const [bowler, setBowler] = useState('')

    const resetState = () => {
        setBowler('')
    }

    const onDialogCloseHandler = () => {
        dispatch(
            openChooseBowlerDialog(false)
        )
        resetState()
    }

    const chooseButtonClickHandler = () => {
        if(bowler!=='') {
            alert("POST")
        }else {
            alert("Bowler is required!")
        }
    }

    const bowlerOptions = playerState.bowlerList.length>0 ?
    (
        // playerState.bowlerList.map(bowler => {
        //     return [
        //         bowler,
        //         standardAvatarListItemGenerator(
        //             `${bowler['person']['username']}`,
        //             `${bowler['person']['first_name']} ${bowler['person']['last_name']} - (${bowler['type']})`
        //         )
        //     ]
        // })
        bowlerScoreboardState.matchBatters.map(bowler => {
            if(bowler['team']['id']===teamState.turnTeam['id']){
                return [
                    bowler,
                    standardAvatarListItemGenerator(
                        `${bowler['player']['persone']['username']}`,
                        `${bowler['player']['person']['first_name']} ${bowler['player']['person']['last_name']} - (${bowler['player']['type']})`
                    )
                ]
            }else {
                return
            }
        })
    ) :
    []

    // useEffect(() => {
    //     if(bowlerScoreboardState.currentBowlers===[]) {
    //         dispatch(
    //             openChooseBatterDialog(true)
    //         )
    //     }else {
    //         dispatch(
    //             openChooseBatterDialog(false)
    //         )
    //     }       
    // },[teamState.turnTeam, bowlerScoreboardState.currentBatters])

    return (
        <Dialog
            open={bowlerScoreboardState.openDialog}
            onClose={onDialogCloseHandler}
            PaperProps={{ 
                sx: { 
                    width: "30%", 
                    backgroundColor: 'background.paper' 
                } 
            }}
            >
            <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-end'
            }}
            >
                <IconButton
                onClick={onDialogCloseHandler}
                >
                    <GrClose size={12}/>
                </IconButton>
            </Box>
            <DialogTitle>
                <Typography
                align='center'
                variant='h5'
                >
                    Choose Bowler
                </Typography>
            </DialogTitle>
            <Divider
            sx={{
                backgroundColor: 'hint.light',
                mr: 4,
                ml: 4,
                opacity: '0.5'
            }}
            />
            <DialogContent>
                {selectFormFieldGenerator(
                    'Bowler',
                    bowlerOptions,
                    bowler,
                    setBowler
                )}
            </DialogContent>
            <DialogActions
            sx={{
                display: 'flex',
                justifyContent: 'center',
                mb: 2
            }}
            >
                <Button
                variant="contained"
                color="primary"
                disableElevation
                sx={{
                    borderRadius: 8,
                    pt: 2,
                    pb: 2,
                    width: '30%'
                }}
                onClick={chooseButtonClickHandler}
            >
                <Typography 
                variant="h6"
                >
                    Done
                </Typography>
            </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ChooseBowlerDialog