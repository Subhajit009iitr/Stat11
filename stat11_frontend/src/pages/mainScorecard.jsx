import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/header";
import MainBattingScorecard from "../components/mainScorecard/battingSection/mainBattingScorecard";
import { Box } from "@mui/material";
import MainBowlingScorecard from "../components/mainScorecard/bowlingSection/mainBowlingScorecard";
import SideBar from "../components/sideBar/sideBar";
import { changeSideBarTabsType } from "../features/sideBar/sideBarSlice";

export default function MainScorecard() {
  const team1 = useSelector(state => state.team.team1)
  const team2 = useSelector(state => state.team.team2)
  const dispatch = useDispatch();
  // console.log("team id",team2.id)
  useEffect(() => {
    dispatch(changeSideBarTabsType("match"));
  }, []);

  return (
    <Box sx={{ backgroundColor: "#F8F8F8", position: "sticky", width:"80vw" }}>
      {/* <Header /> */}
      <SideBar />
      <MainBattingScorecard obj={team1}/>
      <MainBowlingScorecard obj={team1}/>
      <MainBattingScorecard obj={team2}/>
      <MainBowlingScorecard obj={team2}/>
      <br />
      <br />
    </Box>
  );
}
