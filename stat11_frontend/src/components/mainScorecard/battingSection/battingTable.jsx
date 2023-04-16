import React, { useState, useEffect } from "react";
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

export default function BattingTable(props) {
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
    if (status)
      return {
        Batter,
        runs,
        balls,
        s4,
        s6,
        SR,
        fielder,
        bowler,
        howOut,
        status,
      };
    return { Batter, runs, balls, s4, s6, SR, status };
  }

  const [rows_batter, setRows_batter] = useState([]);
  function addBatterRow() {
    setRows_batter([
      ...rows_batter,
      createBatterTable(
        "Virat Kohli",
        61,
        44,
        4,
        4,
        138.64,
        true,
        "Marcus Stoinis",
        "Amit Mishra",
        2
      ),
    ]);
  }
  useEffect(() => {
    addBatterRow();
  }, []);
  // const rows_batter = [
  //   createBatterTable(
  // "Virat Kohli",
  // 61,
  // 44,
  // 4,
  // 4,
  // 138.64,
  // true,
  // "Marcus Stoinis",
  // "Amit Mishra",
  // 2
  //   ),
  //   createBatterTable("Faf du Plessis", 79, 46, 5, 5, 171.74, false),
  //   createBatterTable(
  //     "Glenn Maxwell",
  //     59,
  //     29,
  //     3,
  //     6,
  //     203.45,
  //     true,
  //     "",
  //     "Mark Wood",
  //     1
  //   ),
  //   createBatterTable("Dinesh Karthik", 1, 1, 0, 0, 100, false),
  //   // createBatterTable("3.Manashree Eclair", 6.0, 8, 1, 0, 5.5),
  // ];

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
              !row.status ? (
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
