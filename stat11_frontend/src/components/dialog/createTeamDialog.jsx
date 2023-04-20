import React, { useState } from 'react'
import { openCreateTeamDialog } from '../../features/team/teamSlice'
import { useDispatch, useSelector } from 'react-redux'
import { GrClose } from 'react-icons/gr'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, Input, InputLabel, Typography } from '@mui/material'
import { fileFormFieldGeneator, textFormFieldGenerator } from '../genericComponent/genericFormFieldGenerators'

function CreateTeamDialog() {
    const teamState = useSelector(state => state.team)
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [college, setCollege] = useState('')
    const [flag, setFlag] = useState('')
    const [players, setPlayers] = useState([])

    const validateFlagImageInput = (event) => {
        if(event.target.files.length===1) return true
        return false
    }

    const onDialogCloseHandler = () => {
        dispatch(
            openCreateTeamDialog(false)
        )
    }

    const flagUploadOnChangeHandler = (event) => {
        if(validateFlagImageInput(event)) setFlag(event.target.files[0])
    }

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
                {/* <InputLabel>
                    <Input
                        sx={{
                            display: 'none'
                        }}
                        type="file"
                        // onChange={csvUploadHandler}
                    />
                    <Button 
                        variant="contained" 
                        component="span"
                        sx={{
                            borderRadius: 2,
                            backgroundColor: '#EFEFEF',
                            p: 3,
                            mt: 2,
                            mb: 2,
                            width: '100%',
                            '&:hover': {
                                backgroundColor: '#E5E5E5'
                            }
                        }}
                    >
                        <Typography
                        variant='body1'
                        color='hint.main'
                        >
                            Upload Flag Image
                        </Typography>
                    </Button>
                </InputLabel> */}
                {fileFormFieldGeneator(
                    'Upload Flag Image',
                    flagUploadOnChangeHandler
                )}
                {/* {selectFormFieldGenerator(
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
                )} */}
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
                // onClick={createButtonClickHandler}
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

export default CreateTeamDialog