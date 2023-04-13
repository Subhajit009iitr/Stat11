import React from "react";
import Header from "../components/header";
import BattingScorecard from "../components/updateScorePage/battingScorecard";
import BowlingScorecard from "../components/updateScorePage/bowlingScorecard";
// import playerList from "../constants/playerList";
import { Typography } from "@mui/material";
import ScorerButtonGrid from "../components/updateScorePage/scorerButtonGrid";
export default function UpdateScore() {
  // const [newBowler, setnewBowler] = useState("");
  // const [isOverComplete, setIsOverComplete] = useState(true);
  // const selectBowler = isOverComplete ? (
  //   selectFormFieldGenerator(
  //     "Select Bowler",
  //     playerList,
  //     newBowler,
  //     setnewBowler
  //   )
  // ) : (
  //   <></>
  // );
  return (
    <div>
      <Header />
      <BattingScorecard />
      <BowlingScorecard />
      <Typography
        variant="h3"
        sx={{ fontFamily: "Poppins", fontStyle: "normal", fontWeight: 400 }}
      >
        Update Score
      </Typography>
      <ScorerButtonGrid />
      {/* {selectBowler} */}
    </div>
  );
}
