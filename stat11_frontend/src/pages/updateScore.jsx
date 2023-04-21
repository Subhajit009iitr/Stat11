import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BattingScorecard from "../components/updateScorePage/battingScorecard";
import BowlingScorecard from "../components/updateScorePage/bowlingScorecard";
import playerList from "../constants/playerList";
import { Typography } from "@mui/material";
import ScorerButtonGrid from "../components/updateScorePage/scorerButtonGrid";
import TeamScore from "../components/updateScorePage/teamScore";
import { selectFormFieldGenerator } from "../components/genericComponent/genericFormFieldGenerators";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import dismissalModes from "../constants/modeOfDismissalList";
import SideBar from "../components/sideBar/sideBar";
import { changeSideBarTabsType } from "../features/sideBar/sideBarSlice";
import BattingScorecardHeading from "../components/mainScorecard/battingSection/battingScorecardHeading";
import MatchHeader from "../components/header";

export default function UpdateScore() {
  const team1 = useSelector(state => state.team.team1)
  const team2 = useSelector(state => state.team.team2)
  const dispatch = useDispatch();
  const [newBowler, setNewBowler] = useState("");
  const [newBatsman, setNewBatsman] = useState("");
  const [wicket, setWicket] = useState("");
  const [isOverComplete, setIsOverComplete] = useState(true);
  const [hasWicketFallen, setHasWicketFallen] = useState(true);
  const [fielder, setFielder] = useState("")
  const selectBowler = isOverComplete ? (
    selectFormFieldGenerator(
      "Select New Bowler",
      playerList,
      newBowler,
      setNewBowler
    )
  ) : (
    <></>
  );
  const selectBatsman = hasWicketFallen ? (
    selectFormFieldGenerator(
      "Select Next Batter",
      playerList,
      newBatsman,
      setNewBatsman
    )
  ) : (
    <></>
  );
  const modeOfDismissal = hasWicketFallen ? (
    selectFormFieldGenerator(
      "Select mode of Dismissal",
      dismissalModes,
      wicket,
      setWicket
    )
  ) : (
    <></>
  );

  const selectFielder = hasWicketFallen ? (
    selectFormFieldGenerator(
      "Select Fielder",
      playerList,
      fielder,
      setFielder
    )
  ) : (
    <></>
  );
  
  return (
    <Box sx ={{backgroundColor: "background.default"}}>
      <MatchHeader 
      primaryText={team1.name+" v/s "+team2.name} 
      secondaryText={team2.match.location} 
      tossText = {(team1.toss)?team1.name:team2.name}/>
      
      <BattingScorecard />
      <Box 
      sx={{ 
        mt: "1%" ,
        width: '100%'
      }}>
        <Grid 
        container 
        rowSpacing={5} 
        columnSpacing={{ xs: 4, sm: 4, md: 4 }}
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
        >
          <Grid item xs={2.5}>
            {selectBowler}
          </Grid>
          <Grid item xs={2.5}>
            {modeOfDismissal}
          </Grid>
          <Grid item xs={2.5}>
            {selectBatsman}
          </Grid>
          <Grid item xs={2.5}>
            {selectFielder}
          </Grid>
        </Grid>
      </Box>
      <BowlingScorecard />
      <Typography 
      variant="h3" 
      sx = {{
        textAlign: "left",
        ml: 20,
        mr: 20
      }}>
        Update Score
      </Typography>
      <ScorerButtonGrid />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Box>
  );
}
