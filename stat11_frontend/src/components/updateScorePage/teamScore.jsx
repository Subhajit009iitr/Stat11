import { Typography, Box, Grid } from "@mui/material";
import React from "react";

export default function TeamScore(props) {
  return (
    <>
      <Box sx={{ width: "70%", ml: "25%", mt: "2%" }}>
        <Grid container rowSpacing={5} columnSpacing={{ xs: 4, sm: 4, md: 4 }}>
          <Grid item xs={3}>
            <Typography variant="h4" sx = {{textAlign: "left"}}>{props.teamName}</Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="h4" sx = {{textAlign: "left"}}>
              {props.teamRuns}-{props.wicketsFallen} ({props.oversBowled}.
              {props.ballsInCurrentOver})
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h4" sx = {{textAlign: "right"}}>CRR {props.teamNetRunRate}</Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
