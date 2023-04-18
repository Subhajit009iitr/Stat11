import React, { useEffect } from 'react'
import { List } from '@mui/material'
import matchBarTabs from '../../constants/matchBarTabs'
import { useDispatch, useSelector } from 'react-redux'
import { switchSideBarTab } from '../../features/sideBar/sideBarSlice'
import { listButtonGenerator } from '../genericComponent/genericListGenerators'

function MatchTabs() {
    const sideBarState = useSelector((state) => state.sideBar)
    const dispatch = useDispatch()
  
    const sideBarTabClickHandler = (tab) => {
      dispatch(
        switchSideBarTab(tab)
      )
    }
  
    useEffect(() => {
      dispatch(
        switchSideBarTab('Live')
      )
    },[])
  
    const matchTabs = matchBarTabs.length>0 ?
    matchBarTabs.map(tab => {
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