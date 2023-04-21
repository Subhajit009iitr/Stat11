import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllMatchAndTeams } from "../../../features/match/matchSlice";
import { useEffect } from "react";

export default function BattingScorecardHeading(props) {
  // const Matchdetails = useSelector((state) => state.match.matchAndTeamsList);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getAllMatchAndTeams());
  // }, []);

  return (
    <>
      <Box
        sx={{
          maxWidth: "100%",
          mt: "2%",
          mb: "2%",
          backgroundColor: "primary.main",
          borderRadius: "16px",

        }}
      >
        <Grid container rowSpacing={7} columnSpacing={{ xs: 4, sm: 4, md: 4 }}>
          <Grid item xs={6}>
            <Typography
              variant="h4"
              sx={{ textAlign: "left", ml: "5%", mb: "4%", color: "white" }}
            >
              {props.obj.name}
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
              {props.obj.runs+props.obj.bye+props.obj.legbye+props.obj.no_ball+props.obj.wide}-{props.obj.wickets}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}