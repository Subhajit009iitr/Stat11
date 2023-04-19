import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllMatchAndTeams } from "../../../features/match/matchSlice";
import { useEffect } from "react";

export default function BattingScorecardHeading() {
  const Matchdetails = useSelector((state) => state.match.matchAndTeamsList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMatchAndTeams());
  }, []);
  let teamWhichIsBattingFirst, idOfBattingTeam;
  function whoIsBattingFirst() {
    if (Matchdetails[0].turn) {
      teamWhichIsBattingFirst = Matchdetails[0].name;
      idOfBattingTeam = 0;
    } else {
      teamWhichIsBattingFirst = Matchdetails[1].name;
      idOfBattingTeam = 1;
    }
  }

  whoIsBattingFirst()
  return (
    <>
      <Box
        sx={{
          maxWidth: "100%",
          mt: "2%",
          mb: "2%",
          backgroundColor: "primary.main",
          borderRadius: "16px",
          // borderTopRightRadius: "16px",
        }}
      >
        <Grid container rowSpacing={7} columnSpacing={{ xs: 4, sm: 4, md: 4 }}>
          <Grid item xs={6}>
            <Typography
              variant="h4"
              sx={{ textAlign: "left", ml: "5%", mb: "4%", color: "white" }}
            >
              {teamWhichIsBattingFirst}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              variant="h4"
              sx={{
                textAlign: "right",
                mr: "5%",
                mb: "3%",
                color: "white",
              }}
            >
              {Matchdetails[idOfBattingTeam].team_runs}-{Matchdetails[idOfBattingTeam].team_wickets} ({Matchdetails[idOfBattingTeam].team_current_overs}.
                {Matchdetails[idOfBattingTeam].team_current_over_balls})
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}