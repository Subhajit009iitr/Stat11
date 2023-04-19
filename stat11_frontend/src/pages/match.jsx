import React, { useEffect } from 'react'
import { pageSideBarAppender } from '../components/genericComponent/genericSideBarAppender'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getParticipatingTeams } from '../features/team/teamSlice'
import { changeSideBarTabsType } from '../features/sideBar/sideBarSlice'

function Match() {
    const { match_id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(
            changeSideBarTabsType('match')
        )
        dispatch(
            getParticipatingTeams(match_id)
        )
    },[])

    return (
        pageSideBarAppender(
            'Match'
        )
    )
}

export default Match