import {
  Box,
} from "@mui/material";
import React from "react";
import Header from "../components/header";
import SideBar from "../components/sideBar/sideBar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { changeSideBarTabsType } from "../features/sideBar/sideBarSlice";
import DisplayTeamLists from "../components/displayTeams/displayTeamLists";

function DisplayTeams(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeSideBarTabsType("match"));
  }, []);
  
  return (
    <Box sx = {{backgroundColor: "background.default"}}>
      <Header
        team1Name="Royal Challengers Bangalore"
        team2Name="Lucknow Super Giants"
        location="M. Chinnaswamy Stadium, Bengaluru"
        numberOfOvers="20"
        teamWhichWonTheToss="Lucknow Super Giants"
      />
      <SideBar />
      {/* <TeamNameHeading
        team1Name="Royal Challengers Bangalore"
        team2Name="Lucknow Super Giants"
      /> */}
      <DisplayTeamLists team1Name = "Royal Challengers Bangalore" team2Name = "Lucknow Super Giants"/>
      <br/>
      <br/>
      <br/>
    </Box>
  );
}

export default DisplayTeams;
