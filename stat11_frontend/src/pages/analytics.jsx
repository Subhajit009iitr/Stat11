import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Box } from "@mui/material"
import MatchHeader from "../components/header/matchHeader"
import Grid from "@mui/material/Grid"
import MediaCard from "../components/analytics/analyticscard"
import PieChart from "../components/analytics/piechart"
import BarChart from "../components/analytics/barchart"
import { changeSideBarTabsType } from "../features/sideBar/sideBarSlice"
import AnalyticsContent from "../components/analytics/analyticsContent"

function Analytics() {
  const dispatch = useDispatch()
  const teamState = useSelector(state => state.team)
  const matchState = useSelector(state => state.match)
  useEffect(() => {
    dispatch(changeSideBarTabsType("match"))
  }, [])
  return (
    <>
        <MatchHeader 
        primaryText={`${teamState.team1['name']} v/s ${teamState.team2['name']}`}
        secondaryText={`${matchState.match['location']}`}
        tossText={`${teamState.turnTeam['name']}`}
        />
        <Box
            component="div"
            sx={{
            borderRadius: "16px",
            ml: 10,
            backgroundColor:"background.default",
            }}
        >
            <AnalyticsContent/>
        </Box>
    </>
  )
}

export default Analytics