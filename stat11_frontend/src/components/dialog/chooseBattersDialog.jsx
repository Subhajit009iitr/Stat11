import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openChooseBatterDialog } from '../../features/scoreboard/batterScoreboardSlice'
import { getAllBatters } from '../../features/player/playerSlice'
import { standardAvatarListItemGenerator } from '../genericComponent/genericListGenerators'
import { selectFormFieldGenerator } from '../genericComponent/genericFormFieldGenerators'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, Typography } from '@mui/material'
import { GrClose } from 'react-icons/gr'

function ChooseBatterDialog() {
    const batterScoreboardState = useSelector(state => state.batterScoreboard)
    const playerState = useSelector(state => state.player)
    const teamState = useSelector(state => state.team)
    const dispatch = useDispatch()

    const [batter1, setBatter1] = useState('')
    const [batter2, setBatter2] = useState('')

    const resetState = () => {
        setBatter1('')
        setBatter2('')
    }

    const onDialogCloseHandler = () => {
        dispatch(
            openChooseBatterDialog(false)
        )
        resetState()
    }

    const chooseButtonClickHandler = () => {
        if(batter1!=='' && batter2!=='' && batter1!==batter2) {
            alert("POST")
        }else {
            alert("Both batters required!")
        }
    }

    const batterOptions = batterScoreboardState.matchBatters.length>0 && teamState.turnTeam!=='' ?
    (
        // playerState.batterList.map(batter => {
        //     return [
        //         batter,
        //         standardAvatarListItemGenerator(
        //             `${batter['person']['username']}`,
        //             `${batter['person']['first_name']} ${batter['person']['last_name']} - (${batter['type']})`
        //         )
        //     ]
        // })
        batterScoreboardState.matchBatters.map(batter => {
            if(batter['team']['id']===teamState.turnTeam['id']){
                return [
                    batter,
                    standardAvatarListItemGenerator(
                        `${batter['player']['persone']['username']}`,
                        `${batter['player']['person']['first_name']} ${batter['player']['person']['last_name']} - (${batter['player']['type']})`
                    )
                ]
            }else {
                return
            }
        })
    ) :
    []

    // useEffect(() => {
    //     if(batterScoreboardState.currentBatters===[]) {
    //         dispatch(
    //             openChooseBatterDialog(true)
    //         )
    //     }else {
    //         dispatch(
    //             openChooseBatterDialog(false)
    //         )
    //     }       
    // },[teamState.turnTeam, batterScoreboardState.currentBatters])
    console.log("HELMOALDNLSD>>>>>>")
    console.log(batterScoreboardState.openDialog)

    return (
        <Dialog
            open={batterScoreboardState.openDialog}
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
                    Choose Batters
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
                    'Batter-1',
                    batterOptions,
                    batter1,
                    setBatter1
                )}
                {selectFormFieldGenerator(
                    'Batter-2',
                    batterOptions,
                    batter2,
                    setBatter2
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

export default ChooseBatterDialog