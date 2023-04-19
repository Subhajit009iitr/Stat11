import React, { useEffect } from 'react';
import { Dialog } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { getDistinctTeamOptions, openCreateTeamDialog } from '../../features/team/teamSlice';

function CreateMatchDialog() {
    // const matchState = useSelector(state => state.match)
    const teamState = useSelector(state => state.team)
    const dispatch = useDispatch()

    const onDialogCloseHandler = () => {
        dispatch(
            openCreateTeamDialog(false)
        )
    }
    // function filterDistinctTeams(allMatchAndTeams) {
    //     allTeams = []
    //     if(allMatchAndTeams.length>0) {
    //         allMatchAndTeams.map(matchData => {
    //             matchData['teams'].map(team => {
    //                 allTeams.push({
    //                     name: team['name'],
    //                     college: team['college'],
    //                     flag: team['flag'],
    //                     players: team['players']
    //                 })
    //                 return
    //             })
    //             return
    //         })
    //     }

    //     console.log(allTeams)
    // }

    // useEffect(() => {
    //     // filterDistinctTeams(matchState.)
    //     dispatch(
    //         getDistinctTeamOptions()
    //     )
    // },[])

    return (
        <Dialog
        open={teamState.openDialog}
        onClose={onDialogCloseHandler}
        >
            HEllO
        </Dialog>
    )
}

export default CreateMatchDialog