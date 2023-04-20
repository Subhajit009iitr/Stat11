import React, { useEffect, useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { getDistinctTeamOptions, openCreateTeamDialog } from '../../features/team/teamSlice';
import { GrClose } from 'react-icons/gr'
import { dateTimePickerFieldGenerator, selectFormFieldGenerator, textFormFieldGenerator } from '../genericComponent/genericFormFieldGenerators';
import { teamOptionComponentGenerator } from '../genericComponent/genericListGenerators';
import { createMatch } from '../../features/match/matchSlice';
import dayjs from 'dayjs';

function CreateMatchDialog() {
    const teamState = useSelector(state => state.team)
    const dispatch = useDispatch()

    const [team1, setTeam1] = useState('')
    const [team2, setTeam2] = useState('')
    const [overs, setOvers] = useState('')
    const [location, setLocation] = useState('')

    const [date, setDate] = useState(null)
    const [time, setTime] = useState(null)


    const resetLocalState = () => {
        setDate(null)
        setTime(null)
        setOvers('')
        setLocation('')
        setTeam1('')
        setTeam2('')
    }

    const validateTeamInputs = () => {
        if(team1!=='' && team2!=='' && team1!==team2) return true
        return false
    }

    const validateNumberOfOvers = () => {
        if(overs===null || overs==='') return true

        if(overs<0) return false
        return true
    }

    const onDialogCloseHandler = () => {
        dispatch(
            openCreateTeamDialog(false)
        )
        resetLocalState()  
    }

    const dateFieldChangeHandler = (event) => {
        const month = event['$M']+1>9 ? event['$M']+1 : `0${event['$M']+1}`
        const day = event['$D']>9 ? event['$D'] : `0${event['$D']}`
        setDate(`${event['$y']}-${month}-${day}`)
    }

    const timeFieldChangeHandler = (event) => {
        const hour = event['$H']>9 ? event['$H'] : `0${event['$H']}`
        const minute = event['$m']>9 ? event['$m'] : `0${event['$m']}`
        setTime(`${hour}:${minute}:00`)
    }

    const createButtonClickHandler = () => {
        // if(validateTeamInputs() && validateNumberOfOvers()) {
        if(validateNumberOfOvers()) {
            dispatch(
                createMatch({
                    date: date,
                    time: time,
                    overs_no: overs,
                    location: location,
                    team1: team1,
                    team2: team2
                })
            )
        }
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
                {dateTimePickerFieldGenerator(
                    'Date',
                    date,
                    dateFieldChangeHandler,
                    'Time',
                    time,
                    timeFieldChangeHandler
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
                onClick={createButtonClickHandler}
            >
                <Typography 
                variant="h6"
                >
                    Create
                </Typography>
            </Button>
            </DialogActions>
        </Dialog>
    )
}

export default CreateMatchDialog