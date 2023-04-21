import React from "react"
import { Typography } from "@mui/material"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"

export default function AnalyticsCard(props) {
  return (
    <Card
      sx={{
        width: "auto",
        maxWidth: "460px",
        height: "auto",
        maxHeight: "540px",
        boxShadow: "4px 4px 4px 4px #D9D9D9",
        borderRadius: "16px",
        marginBottom: "40px",
      }}
    >
      <CardContent
        sx={{
          backgroundColor: "primary.main",
          height: "26px",
        }}
      >
        <Typography
          variant="h5"
          label="heading"
          component="box"
          sx={{
            color: "#FFFFFF",
            float: "left",
            paddingLeft: "24px",
          }}
        >
          {props.title}
        </Typography>
        <br />
      </CardContent>
      <CardContent sx={{ backgroundColor: "background.paper" }}>
        {props.chart}
      </CardContent>
    </Card>
  )
}