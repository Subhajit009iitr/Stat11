import React from "react";
import { Box, Button, Grid } from "@mui/material";


export default function ScorerButtonGrid() {
  return (
    <>
      <Box sx={{ maxWidth: "80%", ml: "10%", mt: "2%" }}>
        <Grid container rowSpacing={5} columnSpacing={{ xs: 4, sm: 4, md: 4 }}>
          <Grid item xs={2}>
            <Button variant="contained" sx = {{width: "100%"}}>1</Button>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" sx = {{width: "100%"}}>2</Button>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" sx = {{width: "100%"}}>3</Button>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" sx = {{width: "100%"}}>Bye</Button>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" sx = {{width: "100%"}}>No Ball</Button>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" sx = {{width: "100%"}}>Wicket</Button>
          </Grid>
          <Grid item xs={2.4}>
            <Button variant="contained" sx = {{width: "100%"}}>4</Button>
          </Grid>
          <Grid item xs={2.4}>
            <Button variant="contained" sx = {{width: "100%"}}>5</Button>
          </Grid>
          <Grid item xs={2.4}>
            <Button variant="contained" sx = {{width: "100%"}}>6</Button>
          </Grid>
          <Grid item xs={2.4}>
            <Button variant="contained" sx = {{width: "100%"}}>Wide</Button>
          </Grid>
          <Grid item xs={2.4}>
            <Button variant="contained" sx = {{width: "100%"}}>Leg Bye</Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
