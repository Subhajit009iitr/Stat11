import React from 'react'
import { Box, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import logo from '../../assets/Logo.svg'
import homeBarTabs from '../../constants/homeBarTabs'
import matchBarTabs from '../../constants/matchBarTabs'
import { BiHomeAlt2, BiLogIn, BiHelpCircle, BiLogOut } from 'react-icons/bi'
import { useSelector } from 'react-redux'

function SideBar() {
  const authState = useSelector((state) => state.auth)

  const homeTabs = homeBarTabs.length>0 ?
  homeBarTabs.map(tab => {
    const nologinTabCondition = authState.isAuthenticated && tab['text']==='Login'
    const nologoutTabCondition = !authState.isAuthenticated && tab['text']==='Logout'
    if(nologinTabCondition || nologoutTabCondition) return

    return (
      <ListItemButton>
        <ListItemIcon>
          {tab['icon']}
        </ListItemIcon>
        <ListItemText>
          <Typography
          variant='body1'
          color='hint.light'
          >
            {tab['text']}
          </Typography>
        </ListItemText>
      </ListItemButton>
    )
  })
  :
  []

  const homeTabList = 
  <List
  sx={{
    width: '100%'
  }}
  >
    {homeTabs}
  </List>

  return (
    <Drawer
    variant='permanent'
    PaperProps={{
      sx: { 
          width: '20%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: 4
      },
      }}
    >
      <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '120px',
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
      {homeTabList}
    </Drawer>
  )
}

export default SideBar