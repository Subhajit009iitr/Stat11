import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  TableContainer,
  Box
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.common.black,
    fontSize: 20,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.common.white,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createBowlerTable(Bowler, overs, maidens, runs, wickets, eco) {
  return { Bowler, overs, maidens, runs, wickets, eco };
}

const rows_bowler = [
  createBowlerTable("Raiwat Bapat", 6.5, 8, 1, 0, 5.5),
  // createBowlerTable("Nishita sandwich", 6.0, 8, 1, 0, 5.5),
  // createBowlerTable("Manashree Eclair", 6.0, 8, 1, 0, 5.5),
];

export default function BowlingScorecard() {
  return (
    <Box sx = {{ position: "sticky", backgroundColor: "#F8F8F8"}}>
      <Card
        sx={{
          boxShadow: "0px 0px 0px 0px",
          paddingRight: "5%",
          paddingLeft: "5%", //360px after nav bar
          backgroundColor: "background.default"
        }}
      >
        <CardContent>
          <TableContainer component={Paper} sx={{ borderRadius: "16px" }}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell sx={{ paddingLeft: "48px" }}>
                    Bowler Name
                  </StyledTableCell>
                  <StyledTableCell sx={{ textAlign: "center" }}>
                    Overs&nbsp;
                  </StyledTableCell>
                  <StyledTableCell sx={{ textAlign: "center" }}>
                    Maidens&nbsp;
                  </StyledTableCell>
                  <StyledTableCell sx={{ textAlign: "center" }}>
                    Runs&nbsp;
                  </StyledTableCell>
                  <StyledTableCell sx={{ textAlign: "center" }}>
                    Wickets&nbsp;
                  </StyledTableCell>
                  <StyledTableCell sx={{ textAlign: "center" }}>
                    Eco &nbsp;
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows_bowler.map((row) => (
                  <StyledTableRow>
                    <StyledTableCell
                      component="th"
                      scope="row"
                      sx={{ paddingLeft: "48px" }}
                    >
                      {row.Bowler}
                    </StyledTableCell>
                    <StyledTableCell sx={{ textAlign: "center" }}>
                      {row.overs}
                    </StyledTableCell>
                    <StyledTableCell sx={{ textAlign: "center" }}>
                      {row.maidens}
                    </StyledTableCell>
                    <StyledTableCell sx={{ textAlign: "center" }}>
                      {row.runs}
                    </StyledTableCell>
                    <StyledTableCell sx={{ textAlign: "center" }}>
                      {row.wickets}
                    </StyledTableCell>
                    <StyledTableCell sx={{ textAlign: "center" }}>
                      {row.eco}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
}