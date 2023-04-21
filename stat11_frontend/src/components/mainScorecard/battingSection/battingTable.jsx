import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { batterScoreData } from "../../../features/match/matchSlice";
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
import { useParams } from 'react-router-dom';

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

function mapHowOutToWicketType(data) {
  if (data == "catch") {
    return 2
  } else if (data == "bowled") {
    return 1
  } else if (data == "lbw") {
    return 4
  } else if (data == "run_out") {
    return 3
  } else {
    return 5
  }
}

function createBatterTable(
  Batter,
  runs,
  balls,
  s4,
  s6,
  SR,
  status,
  bowler,
  fielder,
  wicket_type
) {
  var out = false;
  var howOut = mapHowOutToWicketType(wicket_type);
  if (status == 'out') {
    out = true;
    return { Batter, runs, balls, s4, s6, SR, fielder, bowler, howOut, out };
  }

  return { Batter, runs, balls, s4, s6, SR, out };
}



function addrows(batterDetails) {

  const rowsbatter = batterDetails.map((batterDetail) => {
    var bowler = batterDetail.bowled_out_by!==null ? 
    (
      (batterDetail.status == "out")? (batterDetail.bowled_out_by.person.first_name + " " + batterDetail.bowled_out_by.person.last_name): " "
    ) :
    " "
    var fielder = batterDetail.wicket_taker!==null ? 
    (
      (batterDetail.status == "out" && (batterDetail.wicket_type!="bowled")|(batterDetail.wicket_type!="lbw"))? (batterDetail.wicket_taker.person.first_name + " " + batterDetail.wicket_taker.person.last_name): " "
    ) :
    " "

    return createBatterTable(
      //batterDetail.player.person.username,
      batterDetail.player.person.first_name + " " + batterDetail.player.person.last_name,
      batterDetail.runs,
      batterDetail.balls,
      batterDetail.fours,
      batterDetail.sixes,
      batterDetail.strike_rate,
      batterDetail.status,
      //batterDetail.bowled_out_by.person.first_name + " " + batterDetail.bowled_out_by.person.last_name,
      bowler,
      fielder,
      //batterDetail.wicket_taker.person.first_name + " " + batterDetail.wicket_taker.person.last_name,
      batterDetail.wicket_type
    );
  });


  return rowsbatter
}

export default function BattingTable(props) {

  // const batterDetails = useSelector(state => state.match.batterScores)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(
      batterScoreData(props.obj.id),
    )
  }, [])
  console.log(props.bat)
  const rows_batter = addrows(props.bat)
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

              !row.out ? (
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
