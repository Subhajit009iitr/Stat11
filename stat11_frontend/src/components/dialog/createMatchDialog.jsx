import React, { useEffect, useState } from 'react';
import { Avatar, Box, Dialog, DialogContent, DialogTitle, Divider, IconButton, ListItem, ListItemAvatar, ListItemText, Tooltip, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { getDistinctTeamOptions, openCreateTeamDialog } from '../../features/team/teamSlice';
import { GrClose } from 'react-icons/gr'
import { selectFormFieldGenerator, textFormFieldGenerator } from '../genericComponent/genericFormFieldGenerators';
import { teamOptionComponentGenerator } from '../genericComponent/genericListGenerators';

function CreateMatchDialog() {
    const teamState = useSelector(state => state.team)
    const dispatch = useDispatch()

    const [team1, setTeam1] = useState('')
    const [team2, setTeam2] = useState('')
    const [overs, setOvers] = useState('')
    const [location, setLocation] = useState('')

    const onDialogCloseHandler = () => {
        console.log("hello")
        dispatch(
            openCreateTeamDialog(false)
        )
    }

    const validateNumberOfOvers = () => {
        if(overs===null || overs==='') return true

        if(overs<0) return false
        return true
    }

    useEffect(() => {
        dispatch(
            getDistinctTeamOptions()
        )
    },[])

    const teamOptionMenuItemList = teamState.distinctTeamOptions.length>0 ?
    (
        teamState.distinctTeamOptions.map(team => {
            const value = team
            const component = teamOptionComponentGenerator(team)
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
                variant='h6'
                >
                    Create Match
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
                    'Team-1',
                    teamOptionMenuItemList,
                    team1,
                    setTeam1
                )}
                {selectFormFieldGenerator(
                    'Team-2',
                    teamOptionMenuItemList,
                    team2,
                    setTeam2
                )}
                {textFormFieldGenerator(
                    'Number of Overs',
                    overs,
                    setOvers,
                    validateNumberOfOvers,
                    'Negative number of overs are invalid',
                    'number'
                )}
                {textFormFieldGenerator(
                    'Location',
                    location,
                    setLocation
                )}
            </DialogContent>
        </Dialog>
    )
}

export default CreateMatchDialog