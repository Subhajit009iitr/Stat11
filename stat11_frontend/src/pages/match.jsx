import React, { useEffect } from 'react'
import { pageSideBarAppender } from '../components/genericComponent/genericSideBarAppender'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useSearchParams } from 'react-router-dom'
import { getParticipatingTeams } from '../features/team/teamSlice'
import { changeSideBarTabsType } from '../features/sideBar/sideBarSlice'
import UpdateScore from './updateScore'
import MainScorecard from './mainScorecard'
import DisplayTeams from './displayTeams'
import Highlights from './highlights'

function Match() {
    const { match_id } = useParams()
    const sideBarState = useSelector(state => state.sideBar)
    const dispatch = useDispatch()

    const content = () => {
        if(sideBarState.tabsType==='match'){
            if(sideBarState.currentTab==='Live') {
                // return <UpdateScore />
                return 'updateScore'
            }
            // else if(sideBarState.currentTab==='Scoreboard') {
            //     return <MainScorecard />
            // }
            else if(sideBarState.currentTab==='Analysis') {
                return 'Analytics'
            }
            // else if(sideBarState.currentTab==='Teams') {
            //     return <DisplayTeams />
            // }
            // else if(sideBarState.currentTab==='Highlights') {
            //     return <Highlights />
            // }
            // else {
            //     return <></>
            // }
            return 'hello'
        }
    }

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
            content()
        )
    )
}

export default Match