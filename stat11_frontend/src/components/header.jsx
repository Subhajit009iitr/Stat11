import React from "react";
import { Typography, Box } from "@mui/material";
import { getAllMatchAndTeams } from "../features/match/matchSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function Header(props) {
  const dispatch = useDispatch();
  const Matchdetails = useSelector((state) => state.match.matchAndTeamsList);
  useEffect(() => {
    dispatch(getAllMatchAndTeams());
  }, []);

  let teamWhichWonTheToss;
  function decideWhichTeamWonTheToss() {
    if (Matchdetails[0].toss) {
      teamWhichWonTheToss = Matchdetails[0].name;
    } else {
      teamWhichWonTheToss = Matchdetails[1].name;
    }
  }

  decideWhichTeamWonTheToss();
  return (
    <Box sx={{ width: "70%", ml: "25%", position: "sticky"}}>
      <Typography
        // component="box"
        sx={{
          fontSize: "32px",
          float: "left",
          paddingLeft: "30px",
          paddingTop: "72px",
          // paddingBottom: "10px",
        }}
      >
        {Matchdetails[0].name} v/s {Matchdetails[1].name}
        <br />
        <Typography
          // component="box"
          sx={{
            color: "#448791",
            fontSize: "20px",
            float: "left",
          }}
        >
          {Matchdetails[0].match.location} &nbsp;
        </Typography>
        <Typography
          // component="box"
          sx={{
            color: "#797979",
            fontSize: "20px",
            float: "left",
          }}
        >
          {" "}
          {Matchdetails[0].match.overs_no} Overs
        </Typography>
      </Typography>

      <Typography
        // component="box"
        sx={{
          color: "#797979",
          fontSize: "20px",
          textAlign: "right",
          paddingTop: "80px",
          // paddingRight: "160px",
          float: "right",
        }}
      >
        {" "}
        Toss: <br />
        {teamWhichWonTheToss}
      </Typography>

      <Typography 
      // component="box" 
      sx={{ backgroundColor: "#D9D9D9" }}
      >
        <hr style={{ width: "100%" }} />
      </Typography>
    </Box>
  );
}