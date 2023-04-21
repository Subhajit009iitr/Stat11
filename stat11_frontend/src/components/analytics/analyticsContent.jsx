import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Grid from "@mui/material/Grid"
import PieChart from "./piechart"
import BarChart from "./barchart"
import AnalyticsCard from "./analyticscard"
import { matchteamData } from "../../features/analytics/pieChartSlice"
import { changeSideBarTabsType } from "../../features/sideBar/sideBarSlice"
import { useParams } from "react-router"

function AnalyticsContent() {
  const { match_id } = useParams()
  const teamstate = useSelector((state) => state.pieChart.teaminfo)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(matchteamData(match_id))
    dispatch(changeSideBarTabsType("match"))
  }, [])

  const teamnames = teamstate.map((x) => x.name)
  const teamids = teamstate.map((x) => x.id)

  return (
    < >
        <Grid container >
          <Grid item xs={6} >
            <AnalyticsCard
              title={teamnames[0]}
              chart={PieChart(teamids[0])}
            ></AnalyticsCard>
          </Grid>

          <Grid item xs={6}>
            <AnalyticsCard
              title={teamnames[1]}
              chart={PieChart(teamids[1])}
            ></AnalyticsCard>
          </Grid>
          <Grid item xs={6}>
            <AnalyticsCard
              title={teamnames[0]}
              chart={BarChart(teamids[0])}
            ></AnalyticsCard>
          </Grid>
          <Grid item xs={6}>
            <AnalyticsCard
              title={teamnames[1]}
              chart={BarChart(teamids[1])}
            ></AnalyticsCard>
          </Grid>
        </Grid>
    </>
  )
}

export default AnalyticsContent