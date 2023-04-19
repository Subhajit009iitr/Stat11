import React from "react";
import { Box, Grid, Typography } from "@mui/material";

export default function DisplayTotalScore(props) {
    
  return (
    <div >
      <Box
        sx={{
          maxWidth: "100%",
          mt: "2%",
          backgroundColor: "secondary.light",
          borderBottomLeftRadius: "16px",
          borderBottomRightRadius: "16px",
          backgroundColor:"#E5E5E5"
        }}
      >
        <Grid container rowSpacing={7} columnSpacing={{ xs: 4, sm: 4, md: 4 }} >
          <Grid item xs={2} >
            <Typography
              variant="h5"
              sx={{ textAlign: "left", ml: "20%", mb: "10%" }}
            >
              Extras
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="h5" sx={{textAlign: "left" }}>
              {props.totalExtras} (w {props.wides}, lb {props.legByes}, b{" "}
              {props.byes}, nb {props.noBalls})
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography
              variant="h5"
              sx={{textAlign: "right", mr: "7%"}}
            >
              {props.teamRuns}-{props.teamWickets} ({props.overs}.
              {props.ballsInCurrentOver})
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
