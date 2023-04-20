import React, { useEffect, useState } from 'react'
import { openCreateTeamDialog } from '../../features/team/teamSlice'
import { useDispatch, useSelector } from 'react-redux'
import { GrClose } from 'react-icons/gr'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, Typography } from '@mui/material'
import { fileFormFieldGeneator, selectFormFieldGenerator, textFormFieldGenerator } from '../genericComponent/genericFormFieldGenerators'
import { getAllPlayers } from '../../features/player/playerSlice'
import { standardAvatarListItemGenerator } from '../genericComponent/genericListGenerators'
import { addCreateNewMatchTeam } from '../../features/match/matchSlice'

function CreateTeamDialog() {
    const matchState = useSelector(state => state.match)
    const teamState = useSelector(state => state.team)
    const playerState = useSelector(state => state.player)
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [college, setCollege] = useState('')
    const [flag, setFlag] = useState('')
    const [players, setPlayers] = useState([])

    const resetLocalState = () => {
        setName('')
        setCollege('')
        setFlag('')
        setPlayers([])
    }

    const validateFlagImageInput = (event) => {
        if(event.target.files.length===1) return true
        return false
    }

    const checkFileUpload = () => {
        if(flag!=='') return true
        return false
    }

    const onDialogCloseHandler = () => {
        dispatch(
            openCreateTeamDialog(false)
        )
        resetLocalState()
    }

    const flagUploadOnChangeHandler = (event) => {
        if(validateFlagImageInput(event)) setFlag(event.target.files[0])
    }

    const addButtonClickHandler = () => {
        dispatch(
            addCreateNewMatchTeam({
                teamIdentifier: matchState.addingTeamIndentifier,
                team: {
                    name: name,
                    college: college,
                    flag: flag,
                    players: players
                } 
            })
        )
        dispatch(
            openCreateTeamDialog(false)
        )
    }

    useEffect(() => {
        dispatch(
            getAllPlayers()
        )
    },[])

    const playerOptionMenuItemList = playerState.playersList.length>0 ?
    (
        playerState.playersList.map(player => {
            const value = player
            const component = standardAvatarListItemGenerator(
                player['person']['username'],
                `${player['person']['first_name']} ${player['person']['last_name']} - (${player['type']})`
            )
            return [
                value,
                component
            ]
        })
    ) :
    []

    return (
        <Dialog
        open={teamState.openDialog}
        onClose={onDialogCloseHandler}
        PaperProps={{ 
            sx: { 
                width: "40%", 
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
                    Create Team
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
                {textFormFieldGenerator(
                    'Team Name',
                    name,
                    setName
                )}
                {textFormFieldGenerator(
                    'College Name',
                    college,
                    setCollege
                )}
                {fileFormFieldGeneator(
                    'Upload Flag Image',
                    flagUploadOnChangeHandler,
                    checkFileUpload(),
                )}
                {selectFormFieldGenerator(
                    'Add Players',
                    playerOptionMenuItemList,
                    players,
                    setPlayers,
                    true
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
                onClick={addButtonClickHandler}
                >
                    <Typography 
                    variant="h6"
                    >
                        Add
                    </Typography>
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default CreateTeamDialog