import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openTossWinDialog, updateParticipatingTeamToss } from '../../features/team/teamSlice'
import { selectFormFieldGenerator } from '../genericComponent/genericFormFieldGenerators'
import { teamOptionComponentGenerator } from '../genericComponent/genericListGenerators'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, Typography } from '@mui/material'
import { GrClose } from 'react-icons/gr'

function UpdateTossDialog() {
    const dispatch = useDispatch()
    const teamState = useSelector(state => state.team)

    const [tossTeam, setTossTeam] = useState('')
    const [turnTeam, setTurnTeam] = useState('')

    const onDialogCloseHandler = () => {
        if(teamState.turnTeam!=='') {
            dispatch(
                openTossWinDialog(false)
            )
        } 
    }

    const updateTossClickHandler = () => {

        const tossTeam1 = () => {
            if(tossTeam!==''){
                if(tossTeam['id']===teamState.team1['id']) return true
            }
            return false
        }
        const tossTeam2 = !tossTeam1()

        const turnTeam1 = () => {
            if(turnTeam!==''){
                if(turnTeam['id']===teamState.team1['id']) return true
            }
            return false
        }
        const turnTeam2 = !turnTeam1()

        dispatch(
            updateParticipatingTeamToss({
                id: teamState.team1['id'],
                toss: tossTeam1(),
                turn: turnTeam1()
            })
        )
        dispatch(
            updateParticipatingTeamToss({
                id: teamState.team2['id'],
                toss: tossTeam2,
                turn: turnTeam2
            })
        )
    }

    const participatingTurnOptions = () => {
        if(teamState.team1!=='' && teamState.team2!=='') {
            return [
                [
                    teamState.team1,
                    teamOptionComponentGenerator(teamState.team1)
                ],
                [
                    teamState.team2,
                    teamOptionComponentGenerator(teamState.team2)
                ]
            ]
        }else {
            return []
        }
    } 

    return (
        <Dialog
        open={teamState.openTossDialog}
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
                    Who won the Toss?
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
                    'Toss won by',
                    participatingTurnOptions(),
                    tossTeam,
                    setTossTeam
                )}
                {selectFormFieldGenerator(
                    'Batting turn',
                    participatingTurnOptions(),
                    turnTeam,
                    setTurnTeam
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
                onClick={updateTossClickHandler}
            >
                <Typography 
                variant="h6"
                >
                    Update
                </Typography>
            </Button>
            </DialogActions>
        </Dialog>
    )
}

export default UpdateTossDialog