import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/header";
import MainBattingScorecard from "../components/mainScorecard/battingSection/mainBattingScorecard";
import { Box } from "@mui/material";
import MainBowlingScorecard from "../components/mainScorecard/bowlingSection/mainBowlingScorecard";
import SideBar from "../components/sideBar/sideBar";
import { changeSideBarTabsType } from "../features/sideBar/sideBarSlice";

export default function MainScorecard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeSideBarTabsType("match"));
  }, []);

  return (
    <Box sx={{ backgroundColor: "#F8F8F8", position: "sticky" }}>
      <Header />
      <SideBar />
      <MainBattingScorecard in={0}/>
      <MainBowlingScorecard />
      <br />
      <br />
    </Box>
  );
}
