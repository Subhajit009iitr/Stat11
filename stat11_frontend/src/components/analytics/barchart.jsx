import React, { useState, useEffect } from "react"
import { Bar } from "react-chartjs-2"
import Chart from "chart.js/auto"
import { useDispatch, useSelector } from "react-redux"
import { bowlerData } from "../../features/analytics/barChartSlice"
//import { matchteamData } from "../../features/analytics/analyticsCardSlice"

export default function BarChart(teamid) {
  const playerNameswickets = useSelector((state) => state.barChart.bowlerinfo)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(bowlerData())
  }, [])

  const teamplayernames = []
  const teamplayerwickets = []
  playerNameswickets.map((element, index) => {
    if (element.team.id === teamid) {
      teamplayernames.push(element.player.person.first_name)
      teamplayerwickets.push(element.wickets)
    }
    return null
  })

  const data = {
    labels: teamplayernames,
    datasets: [
      {
        label: "Wickets taken",
        data: teamplayerwickets,
        backgroundColor: [
          "#ADDFE8",
          "#FDB26E",
          "#CFC8FF",
          "#8AABAF",
          "#FE938C",
          "#FFA3A3",
          "#EFEA5A",
          "#CF452D",
          "#758AE1",
          "#EFC88B",
          "#D0DAD4",
          "#5EABCC",
          "#FE658A",
          "#FE653E",
          "#A9959C",
        ],
        // borderColor: "#000000",
        borderWidth: 0.2,
      },
    ],
  }
  const options = {
    plugins: {
      legend: {
        labels: {
          boxWidth: 0,
          //   boxHeight: 20,
          font: {
            size: 16,
          },
        },
        display: true,
        position: "bottom",
      },
    },
  }

  return (
    <div>
      <Bar data={data} options={options}></Bar>
    </div>
  )
}