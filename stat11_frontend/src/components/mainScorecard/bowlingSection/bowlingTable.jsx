import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Box, Button, Divider, Typography } from '@mui/material'
import { bowlerScoreData } from "../../../features/match/matchSlice";

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
    backgroundColor: "#aad3e0",
    color: theme.palette.common.black,
    fontSize: 20,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
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

function createBowlerTable(Bowler, overs, maidens, runs, wickets, eco) {
  return { Bowler, overs, maidens, runs, wickets, eco };
}

function addrows(bowlerDetails)
{
  const rowsbowler = bowlerDetails.map((bowlerDetail)=>{
    return createBowlerTable(
        bowlerDetail.player.person.first_name+" "+bowlerDetail.player.person.last_name,
        Math.floor((bowlerDetail.balls+3)/6),
        bowlerDetail.maidens,
        bowlerDetail.runs,
        bowlerDetail.wickets,
        bowlerDetail.economy,
      )
  
  
  })
   return rowsbowler 
}

export default function BowlingTable() {
  const bowlerDetails = useSelector(state=>state.match.bowlerScores)
  const rows_bowler = addrows(bowlerDetails)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(
      bowlerScoreData()
    )
  },[])
  return (
    <div>
      <Card
        sx={{
          boxShadow: "0px 0px 0px 0px",
          paddingRight: "116px",
          paddingLeft: "116px", //360px after nav bar
          backgroundColor: "#F8F8F8"
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
    </div>
  );
}
