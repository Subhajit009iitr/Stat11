import React from "react";
import { Box, Button, Grid } from "@mui/material";

export default function ScorerButtonGrid() {
  return (
    <>
      <Box 
      sx={{ 
        mt: "2%" ,
        mb: 10,
        ml: 20,
        mr: 20
        }}>
        <Grid container rowSpacing={5} columnSpacing={{ xs: 4, sm: 4, md: 4 }}>
          <Grid item xs={2}>
            <Button
              variant="contained"
              sx={{
                width: "100%",
                backgroundColor: "white",
                color: "black",
                border: "2px solid #D9D9D9",
                ":hover": {
                  backgroundColor: "primary.main",
                  color: "white",
                },
              }}
            >
              0
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              sx={{
                width: "100%",
                backgroundColor: "white",
                color: "black",
                border: "2px solid #D9D9D9",
                ":hover": {
                  backgroundColor: "primary.main",
                  color: "white",
                },
              }}
            >
              1
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              sx={{
                width: "100%",
                backgroundColor: "white",
                color: "black",
                border: "2px solid #D9D9D9",
                ":hover": {
                  backgroundColor: "primary.main",
                  color: "white",
                },
              }}
            >
              2
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              sx={{
                width: "100%",
                backgroundColor: "white",
                color: "black",
                border: "2px solid #D9D9D9",
                ":hover": {
                  backgroundColor: "primary.main",
                  color: "white",
                },
              }}
            >
              3
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              sx={{
                width: "100%",
                backgroundColor: "white",
                color: "black",
                border: "2px solid #D9D9D9",
                ":hover": {
                  backgroundColor: "primary.main",
                  color: "white",
                },
              }}
            >
              Bye
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              sx={{
                width: "100%",
                backgroundColor: "white",
                color: "black",
                border: "2px solid #D9D9D9",
                ":hover": {
                  backgroundColor: "primary.main",
                  color: "white",
                },
              }}
            >
              No Ball
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              sx={{
                width: "100%",
                backgroundColor: "white",
                color: "black",
                border: "2px solid #D9D9D9",
                ":hover": {
                  backgroundColor: "primary.main",
                  color: "white",
                },
              }}
            >
              Wicket
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              sx={{
                width: "100%",
                backgroundColor: "white",
                color: "black",
                border: "2px solid #D9D9D9",
                ":hover": {
                  backgroundColor: "primary.main",
                  color: "white",
                },
              }}
            >
              4
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              sx={{
                width: "100%",
                backgroundColor: "white",
                color: "black",
                border: "2px solid #D9D9D9",
                ":hover": {
                  backgroundColor: "primary.main",
                  color: "white",
                },
              }}
            >
              5
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              sx={{
                width: "100%",
                backgroundColor: "white",
                color: "black",
                border: "2px solid #D9D9D9",
                ":hover": {
                  backgroundColor: "primary.main",
                  color: "white",
                },
              }}
            >
              6
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              sx={{
                width: "100%",
                backgroundColor: "white",
                color: "black",
                border: "2px solid #D9D9D9",
                ":hover": {
                  backgroundColor: "primary.main",
                  color: "white",
                },
              }}
            >
              Wide
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              sx={{
                width: "100%",
                backgroundColor: "white",
                color: "black",
                border: "2px solid #D9D9D9",
                ":hover": {
                  backgroundColor: "primary.main",
                  color: "white",
                },
              }}
            >
              Leg Bye
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}