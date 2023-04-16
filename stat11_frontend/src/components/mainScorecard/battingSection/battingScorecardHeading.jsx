import React from "react";
import { Box, Grid, Typography } from "@mui/material";

export default function BattingScorecardHeading(props) {
  return (
    <>
      <Box
        sx={{
          maxWidth: "100%",
          mt: "2%",
          backgroundColor: "#448791",
          borderTopLeftRadius: "16px",
          borderTopRightRadius: "16px",
        }}
      >
        <Grid container rowSpacing={7} columnSpacing={{ xs: 4, sm: 4, md: 4 }}>
          <Grid item xs={6}>
            <Typography
              variant="h4"
              sx={{ textAlign: "left", ml: "5%", mb: "3%", color: "white" }}
            >
              {props.battingTeamName}
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
              {props.teamRuns}-{props.teamWickets} ({props.overs}.
              {props.ballsInCurrentOver})
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
