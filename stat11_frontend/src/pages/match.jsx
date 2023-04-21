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
import LiveContent from '../components/liveContent'
import Analytics from './analytics'

function Match() {
    const { match_id } = useParams()
    const sideBarState = useSelector(state => state.sideBar)
    const dispatch = useDispatch()

    const content = () => {
        if(sideBarState.tabsType==='match'){
            if(sideBarState.currentTab==='Live') {
                // return <UpdateScore />
                // return 'updateScore'
                // return <DisplayTeams />
                // return <LiveContent matchId={match_id} />
                return <UpdateScore />
                // return "Live
            }
            else if(sideBarState.currentTab==='Scoreboard') {
                return <MainScorecard matchId={match_id} />
            }
            else if(sideBarState.currentTab==='Analysis') {
                return <Analytics />
            }
            else if(sideBarState.currentTab==='Teams') {
                return <DisplayTeams matchId={match_id} />
            }
            else if(sideBarState.currentTab==='Highlights') {
                return <Highlights matchId={match_id} />
            }
            else {
                return <></>
            }
        }
    }

    const matchContent = sideBarState.tabsType==='match' ?
    (
        sideBarState.currentTab==='Live' ?
        "LIVE" :
        (
            sideBarState.currentTab==='Scoreboard' ?
            <MainScorecard matchId={match_id} /> :
            (
                sideBarState.currentTab==='Analysis' ?
                "Analytics" :
                (
                    sideBarState.currentTab==='Teams' ?
                    <DisplayTeams matchId={match_id} /> :
                    (
                        sideBarState.currentTab==='Highlights' ?
                        <Highlights matchId={match_id} /> :
                        <></>
                    )
                )
            )
        )
    ) :
    <></>

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