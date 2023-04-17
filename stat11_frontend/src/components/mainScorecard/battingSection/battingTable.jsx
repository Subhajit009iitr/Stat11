import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Box } from '@mui/material'
import { batterScoreData } from "../../../features/match/matchSlice";

import { 
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  TableContainer,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";

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
    backgroundColor: "white",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createBatterTable(
  Batter,
  runs,
  balls,
  s4,
  s6,
  SR,
  status,
  fielder,
  bowler,
  howOut
) {
  var x = false;
  if (status == 'out')
    {
      x = true;
      return { Batter, runs, balls, s4, s6, SR, fielder, bowler, howOut, x };
    }
    
  return { Batter, runs, balls, s4, s6, SR, x };
}



function addrows(batterDetails)
{
  // var rowsbatter = []
  //   rowsbatter[0] = createBatterTable("Subhajit", 29 ,2, 2, 2, 8.8, false);
  //   rowsbatter[1] = createBatterTable("Subhajit", 29 ,2, 2, 2, 8.8, false);
  // // for(let i=0; i<2; i++ )
  // {
  //   rowsbatter[i] = 
  //   createBatterTable(batterDetails[i].player.person.username,
  //     batterDetails[i].runs,
  //     batterDetails[i].balls,
  //     batterDetails[i].fours,
  //     batterDetails[i].sixes,
  //     99.8
  //     )
  // };
const rowsbatter = batterDetails.map((batterDetail) => {
  return createBatterTable(
    //batterDetail.player.person.username,
    batterDetail.player.person.first_name+" "+batterDetail.player.person.last_name,
    batterDetail.runs,
    batterDetail.balls,
    batterDetail.fours,
    batterDetail.sixes,
    batterDetail.strike_rate,
  );
});


  return rowsbatter
}

export default function BattingTable(props) {
  const batterDetails = useSelector(state => state.match.batterScores) 
  const rows_batter = addrows(batterDetails)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(
      batterScoreData()
      )
  },[])
  console.log("batters ",batterDetails)
  let secondarytext;
  if (props.hasInningsEnded) {
    secondarytext = "Not out";
  } else {
    secondarytext = "Batting";
  }

  const updateSecondaryText = (row) => {
    if (row.howOut == 1) {
      return "b " + row.bowler;
    } else if (row.howOut == 2) {
      return "c " + row.fielder + " b " + row.bowler;
    } else if (row.howOut == 3) {
      return "run out (" + row.fielder + ")";
    } else if (row.howOut == 4) {
      return "lbw " + row.bowler;
    } else if (row.howOut == 5) {
      return "st " + row.fielder + " b " + row.bowler;
    } else {
      return "HitWicket " + row.bowler;
    }
  };

  return (
    <Box>
      <TableContainer
        component={Paper}
        sx={{ borderTopLeftRadius: "16px", borderTopRightRadius: "16px" }}
      >
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell sx={{ paddingLeft: "48px" }}>
                Batter Name
              </StyledTableCell>
              <StyledTableCell sx={{ textAlign: "center" }}>
                Runs&nbsp;
              </StyledTableCell>
              <StyledTableCell sx={{ textAlign: "center" }}>
                Balls&nbsp;
              </StyledTableCell>
              <StyledTableCell sx={{ textAlign: "center" }}>
                4s&nbsp;
              </StyledTableCell>
              <StyledTableCell sx={{ textAlign: "center" }}>
                6s&nbsp;
              </StyledTableCell>
              <StyledTableCell sx={{ textAlign: "center" }}>
                S.R. &nbsp;
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows_batter.map((row) =>
              // console.log(row);
              
              !row.x ? (
                <StyledTableRow>
                  {/* secondarytext = {{row.status}? updateSecondaryText({row.howOut}, {row.fielder}, {row.bowler}) : secondarytext} */}
                  <StyledTableCell
                    component="th"
                    scope="row"
                    sx={{ paddingLeft: "48px" }}
                  >
                    {row.Batter}
                    <br />

                    <font color="#A5A5A5">{secondarytext}</font>
                  </StyledTableCell>
                  <StyledTableCell sx={{ textAlign: "center" }}>
                    {row.runs}
                  </StyledTableCell>
                  <StyledTableCell sx={{ textAlign: "center" }}>
                    {row.balls}
                  </StyledTableCell>
                  <StyledTableCell sx={{ textAlign: "center" }}>
                    {row.s4}
                  </StyledTableCell>
                  <StyledTableCell sx={{ textAlign: "center" }}>
                    {row.s6}
                  </StyledTableCell>
                  <StyledTableCell sx={{ textAlign: "center" }}>
                    {row.SR}
                  </StyledTableCell>
                </StyledTableRow>
              ) : (
                <StyledTableRow>
                  {/* secondarytext = {{row.status}? updateSecondaryText({row.howOut}, {row.fielder}, {row.bowler}) : secondarytext} */}
                  <StyledTableCell
                    component="th"
                    scope="row"
                    sx={{ paddingLeft: "48px" }}
                  >
                    {row.Batter}
                    <br />
                    <font color="#A5A5A5">{updateSecondaryText(row)}</font>
                  </StyledTableCell>
                  <StyledTableCell sx={{ textAlign: "center" }}>
                    {row.runs}
                  </StyledTableCell>
                  <StyledTableCell sx={{ textAlign: "center" }}>
                    {row.balls}
                  </StyledTableCell>
                  <StyledTableCell sx={{ textAlign: "center" }}>
                    {row.s4}
                  </StyledTableCell>
                  <StyledTableCell sx={{ textAlign: "center" }}>
                    {row.s6}
                  </StyledTableCell>
                  <StyledTableCell sx={{ textAlign: "center" }}>
                    {row.SR}
                  </StyledTableCell>
                </StyledTableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
