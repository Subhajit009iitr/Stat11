import React from "react";
import BowlingTable from "./bowlingTable";
import { Box } from "@mui/material";

export default function MainBowlingScorecard() {
  return (
    <Box sx={{ width: "80%", ml: "20%", position: "sticky"}}>
      <BowlingTable />
    </Box>
  );
}
