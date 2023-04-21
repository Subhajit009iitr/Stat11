import {
  Box,
} from "@mui/material";
import React from "react";
import Header from "../components/header";
import SideBar from "../components/sideBar/sideBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { changeSideBarTabsType } from "../features/sideBar/sideBarSlice";
import DisplayTeamLists from "../components/displayTeams/displayTeamLists";
import MatchHeader from "../components/header";

function DisplayTeams(props) {
  const dispatch = useDispatch();
  const team1 = useSelector(state => state.team.team1)
  const team2 = useSelector(state => state.team.team2)

  useEffect(() => {
    dispatch(changeSideBarTabsType("match"));
  }, []);
  
  return (
    <Box sx = {{backgroundColor: "background.default"}}>
      <MatchHeader 
      primaryText={team1.name+" v/s "+team2.name} 
      secondaryText={team2.match.location} 
      tossText = {(team1.toss)?team1.name:team2.name}/>
      <SideBar />
      <DisplayTeamLists />
      <br/>
      <br/>
      <br/>
    </Box>
  );
}

export default DisplayTeams;
