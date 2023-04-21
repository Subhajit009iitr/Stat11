import React, { useEffect } from 'react'
import { List } from '@mui/material'
import matchBarTabs from '../../constants/matchBarTabs'
import { useDispatch, useSelector } from 'react-redux'
import { changeSideBarTabsType, switchSideBarTab } from '../../features/sideBar/sideBarSlice'
import { listButtonGenerator } from '../genericComponent/genericListGenerators'
import { useNavigate } from 'react-router-dom'
import { resetTeamState } from '../../features/team/teamSlice'

function MatchTabs() {
    const sideBarState = useSelector((state) => state.sideBar)
    const authState = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
  
    const sideBarTabClickHandler = (tab) => {
      dispatch(
        switchSideBarTab(tab)
      )
      if(tab==='Home') {
        dispatch(
          changeSideBarTabsType('home')
        )
        dispatch(
          resetTeamState()
        )
        navigate('/home')
      }
    }
  
    useEffect(() => {
      dispatch(
        switchSideBarTab('Scoreboard')
      )
    },[])
  
    const matchTabs = matchBarTabs.length>0 ?
    matchBarTabs.map(tab => {
      if(authState.isAuthenticated===false && tab['text']==='Live') return
      
      const buttonBackgroundColor = sideBarState.currentTab===tab['text'] ? 'primary.light' : 'background.paper'
      const typographyColor = sideBarState.currentTab===tab['text'] ? 'hint.dark' : 'hint.light'
      return listButtonGenerator(
        tab['icon'],
        tab['text'],
        sideBarTabClickHandler,
        buttonBackgroundColor,
        typographyColor
      )
      
      
    })
    :
    []
  
    return (
        <List
        sx={{
        width: '100%'
        }}
        >
            {matchTabs}
        </List>
    )
}

export default MatchTabs