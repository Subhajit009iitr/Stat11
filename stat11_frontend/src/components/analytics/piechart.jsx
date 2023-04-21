import React, { useState, useEffect } from "react"
import { Pie } from "react-chartjs-2"
import Chart from "chart.js/auto"
import { useDispatch, useSelector } from "react-redux"
import { playerData } from "../../features/analytics/pieChartSlice"

export default function PieChart(teamid) {
  const playerNamesRuns = useSelector((state) => state.pieChart.playerinfo)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(playerData())
  }, [])

  const teamplayernames = []
  const teamplayerruns = []
  playerNamesRuns.map((element, index) => {
    if (element.team.id === teamid) {
      teamplayernames.push(element.player.person.first_name)
      teamplayerruns.push(element.runs)
    }
    return null
  })

  const data = {
    labels: teamplayernames,
    datasets: [
      {
        label: "Runs Scored",
        data: teamplayerruns,
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
          boxWidth: 20,
          boxHeight: 20,
          font: {
            size: 16,
          },
        },
        display: true,
        position: "bottom",
      },
      title: {
        display: true,
        text: "Runs Scored",
        color: "#202020",
        font: {
          size: 16,
        },
        padding: {
          top: 15,
          bottom: 15,
        },
        responsive: true,
        animation: {
          animateScale: true,
        },
      },
    },
  }

  return (
    <div>
      <Pie data={data} options={options}></Pie>
    </div>
  )
}