import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MatchHeader from "../components/header";
import MainBattingScorecard from "../components/mainScorecard/battingSection/mainBattingScorecard";
import { Box, Button } from "@mui/material";
import MainBowlingScorecard from "../components/mainScorecard/bowlingSection/mainBowlingScorecard";
import SideBar from "../components/sideBar/sideBar";
import { changeSideBarTabsType } from "../features/sideBar/sideBarSlice";
import { batterScoreData, bowlerScoreData } from "../features/match/matchSlice"

export default function MainScorecard() {
  const team1 = useSelector(state => state.team.team1)
  const team2 = useSelector(state => state.team.team2)
  const batterDetails = useSelector(state => state.match.batterScores)
  const bowlerDetails = useSelector(state=>state.match.bowlerScores)
  const [team, setTeam] = useState(team1);
  const [batt, setBatt] = useState(batterDetails);
  const [bowl, setBowl] = useState(bowlerDetails);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeSideBarTabsType("match"))
    dispatch(batterScoreData(team.id))
    dispatch(bowlerScoreData(team.id))
  }, []);

  const handleTeam1Click = () => {
    setTeam(team1)
    dispatch(batterScoreData(team1.id))
    dispatch(bowlerScoreData(team1.id))
    setBatt(batterDetails)
    setBowl(bowlerDetails)
  };

  const handleTeam2Click = () => {
    setTeam(team2)
    dispatch(batterScoreData(team2.id))
    dispatch(bowlerScoreData(team2.id))
    setBatt(batterDetails)
    setBowl(bowlerDetails)
  };

  return (
    <Box sx={{ backgroundColor: "#F8F8F8", position: "sticky", width:"80vw" }}>
      <MatchHeader 
      primaryText={team1.name+" v/s "+team2.name} 
      secondaryText={team2.match.location} 
      tossText = {(team1.toss)?team1.name:team2.name}/>
      <SideBar />
      <Button sx={{float:'left', width: "40vw"}} onClick={() => {handleTeam1Click()}}>
      {team1.name}
      </Button>
      <Button sx={{float:'left', width: "40vw"}} onClick={() => {handleTeam2Click()}}>
      {team2.name}
      </Button>
      <br />
      <div>
      <MainBattingScorecard obj={team} bat={batt}/>
      </div>
      <div>
      <MainBowlingScorecard obj={team} bol={bowl}/>
      </div>
      <br />
      <br />
    </Box>
  );
}
