import React from "react";
import { Typography } from "@mui/material";

export default function Header(props) {
  return (
    <div>
      <Typography
        component="box"
        sx={{
          fontSize: "32px",
          float: "left",
          paddingLeft: "30px",
          paddingTop: "72px",
          paddingBottom: "10px",
        }}
      >
        {props.team1Name} v/s {props.team2Name}
        <br />
        <Typography
          component="box"
          sx={{
            color: "#448791",
            fontSize: "20px",
            float: "left",
          }}
        >
          {props.location} &nbsp;
        </Typography>
        <Typography
          component="box"
          sx={{
            color: "#797979",
            fontSize: "20px",
            float: "left",
          }}
        >
          {" "}
          {props.numberOfOvers} Overs
        </Typography>
      </Typography>

      <Typography
        component="box"
        sx={{
          color: "#797979",
          fontSize: "20px",
          textAlign: "right",
          paddingTop: "80px",
          paddingRight: "160px",
          float: "right",
        }}
      >
        {" "}
        Toss: <br />
        {props.teamWhichWonTheToss}
      </Typography>

      <Typography component="box" sx={{ backgroundColor: "#D9D9D9" }}>
        <hr style={{ width: "96vw" }} />
      </Typography>
    </div>
  );
}