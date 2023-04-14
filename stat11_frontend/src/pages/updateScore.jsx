import React, { useState } from "react";
import Header from "../components/header";
import BattingScorecard from "../components/updateScorePage/battingScorecard";
import BowlingScorecard from "../components/updateScorePage/bowlingScorecard";
import playerList from "../constants/playerList";
import { Typography } from "@mui/material";
import ScorerButtonGrid from "../components/updateScorePage/scorerButtonGrid";
import TeamScore from "../components/updateScorePage/teamScore";
import { selectFormFieldGenerator } from "../components/form/genericFormFieldGenerators";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import dismissalModes from "../constants/modeOfDismissalList";

export default function UpdateScore() {
  const [newBowler, setNewBowler] = useState("");
  const [newBatsman, setNewBatsman] = useState("");
  const [wicket, setWicket] = useState("");
  const [isOverComplete, setIsOverComplete] = useState(true);
  const [hasWicketFallen, setHasWicketFallen] = useState(true);
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
  return (
    <div>
      <Header />
      <TeamScore
        teamName="Mumbai Indians"
        teamRuns="185"
        wicketsFallen="3"
        oversBowled="14"
        ballsInCurrentOver="3"
        teamNetRunRate="14.3"
      />
      <BattingScorecard />
      <Box sx={{ maxWidth: "80%", ml: "10%", mt: "2%" }}>
        <Grid container rowSpacing={5} columnSpacing={{ xs: 4, sm: 4, md: 4 }}>
          <Grid item xs={4}>
            {selectBowler}
          </Grid>
          <Grid item xs={4}>
            {modeOfDismissal}
          </Grid>
          <Grid item xs={4}>
            {selectBatsman}
          </Grid>
        </Grid>
      </Box>
      <BowlingScorecard />
      <Typography variant="h3">Update Score</Typography>
      <ScorerButtonGrid />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
