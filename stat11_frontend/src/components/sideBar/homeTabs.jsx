import React, { useEffect } from 'react'
import { List } from '@mui/material'
import homeBarTabs from '../../constants/homeBarTabs'
import { useDispatch, useSelector } from 'react-redux'
import { switchSideBarTab } from '../../features/sideBar/sideBarSlice'
import { useNavigate } from 'react-router-dom'
import { logoutUser } from '../../features/auth/authSlice'
import { listButtonGenerator } from '../genericComponent/genericListGenerators'

function HomeTabs() {
    const authState = useSelector((state) => state.auth)
    const sideBarState = useSelector((state) => state.sideBar)
    const dispatch = useDispatch()
    const navigate = useNavigate()
  
    const sideBarTabClickHandler = (tab) => {
      dispatch(
        switchSideBarTab(tab)
      )
    }
  
    useEffect(() => {
      if(sideBarState.currentTab==='Login') navigate('/auth')
      if(sideBarState.currentTab==='Logout') dispatch(logoutUser())
    },[sideBarState.currentTab])
  
    useEffect(() => {
      dispatch(
        switchSideBarTab('Home')
      )
    },[])
  
    const homeTabs = homeBarTabs.length>0 ?
    homeBarTabs.map(tab => {
      const nologinTabCondition = authState.isAuthenticated && tab['text']==='Login'
      const nologoutTabCondition = !authState.isAuthenticated && tab['text']==='Logout'
      if(nologinTabCondition || nologoutTabCondition) return
  
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
        width: '100%',
        }}
        >
            {homeTabs}
        </List>
    )
}

export default HomeTabs