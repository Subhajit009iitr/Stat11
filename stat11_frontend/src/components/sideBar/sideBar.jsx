import React, { useEffect } from 'react'
import { Box, Divider, Drawer } from '@mui/material'
import logo from '../../assets/Logo.svg'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import HomeTabs from './homeTabs'
import MatchTabs from './matchTabs'

function SideBar() {
  const sideBarState = useSelector((state) => state.sideBar)

  const tabList = sideBarState.tabsType==='home' ? 
  <HomeTabs /> :
  (
    sideBarState.tabsType==='match' ?
    <MatchTabs /> :
    <></>
  )

  return (
    <Drawer
    variant='permanent'
    PaperProps={{
      sx: { 
          width: '20%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
      },
      }}
    >
      <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '120px',
        mt: 5,
        mr: 2,
        ml: 2
      }}
      >
        <Box
        component="img"
        sx={{
          height: '45%',
          width: 'auto'
        }}
        alt="Logo"
        src={logo}
        />
      </Box>
      <Divider
        sx={{
          width: "100%",
          backgroundColor: "hint",
          marginBottom: 3
        }}
      />
      {tabList}
    </Drawer>
  )
}

export default SideBar