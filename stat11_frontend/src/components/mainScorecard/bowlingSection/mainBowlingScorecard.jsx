import React from "react";
import BowlingTable from "./bowlingTable";
import { Box } from "@mui/material";

export default function MainBowlingScorecard(props) {
  return (
    <Box sx={{ width: "80vw",  position: "sticky"}}>
      <BowlingTable obj={props.obj}/>
    </Box>
  );
}
