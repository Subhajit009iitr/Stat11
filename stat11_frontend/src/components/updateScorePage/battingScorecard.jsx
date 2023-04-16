import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  TableContainer,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#448791",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createBatterTable(Batter, runs, balls, s4, s6, SR) {
  return { Batter, runs, balls, s4, s6, SR };
}

const rows_batter = [
  createBatterTable("Raiwat Bapat", 6.0, 8, 1, 0, 5.5),
  createBatterTable("Nishita sandwich", 6.0, 8, 1, 0, 5.5),
  // createBatterTable("3.Manashree Eclair", 6.0, 8, 1, 0, 5.5),
];

function BattingScorecard() {
  const secondarytext = "Batting"
  return (
    <div>
      <Card
        sx={{
          boxShadow: "0px 0px 0px 0px",
          paddingRight: "116px",
          paddingLeft: "116px", //360px after nav bar
        }}
      >
        <CardContent>
          <TableContainer component={Paper} sx={{ borderRadius: "16px" }}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell sx={{ paddingLeft: "48px" }}>
                    Batter Name
                  </StyledTableCell>
                  <StyledTableCell sx={{ textAlign: "center" }}>Runs&nbsp;</StyledTableCell>
                  <StyledTableCell sx={{ textAlign: "center" }}>Balls&nbsp;</StyledTableCell>
                  <StyledTableCell sx={{ textAlign: "center" }}>4s&nbsp;</StyledTableCell>
                  <StyledTableCell sx={{ textAlign: "center" }}>6s&nbsp;</StyledTableCell>
                  <StyledTableCell sx={{ textAlign: "center" }}>S.R. &nbsp;</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows_batter.map((row) => (
                  <StyledTableRow>
                    <StyledTableCell
                      component="th"
                      scope="row"
                      sx={{ paddingLeft: "48px" }}
                    >
                      {row.Batter}<br/><font color= "#A5A5A5">{secondarytext}</font>
                    </StyledTableCell>
                    <StyledTableCell sx={{ textAlign: "center" }}>{row.runs}</StyledTableCell>
                    <StyledTableCell sx={{ textAlign: "center" }}>{row.balls}</StyledTableCell>
                    <StyledTableCell sx={{ textAlign: "center" }}>{row.s4}</StyledTableCell>
                    <StyledTableCell sx={{ textAlign: "center" }}>{row.s6}</StyledTableCell>
                    <StyledTableCell sx={{ textAlign: "center" }}>{row.SR}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </div>
  );
}

export default BattingScorecard;
