import React, { useEffect } from "react";
import {
  Box,
  styled,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  TableHead,
  Typography,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import { useSelector,useDispatch } from "react-redux";
import { matchTeams,getAllMatchAndTeamsDetails } from "../../features/match/matchSlice";
import { useParams } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#448791",
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

export default function DisplayTeamLists(props) {
  // const { match_id } = useParams()
  const {matchId} = props
  const Matchdetails = useSelector(state => state.match.details)
  const Team = useSelector(state => state.match.Teams);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllMatchAndTeamsDetails(matchId))
    dispatch(matchTeams(matchId))
  },[])

  // console.log("MATCH ID")
  // console.log(matchId)
  // console.log("Yesss");
  const team1List = Team[0]===undefined ? [] : Team[0];
  // console.log("Yes");
  const team2List = Team[1]===undefined ? [] : Team[1];

  const matchDet = Matchdetails===[] ? [[{name: 'Team1'}],[{name: 'Team2'}]] : Matchdetails

  
  return (
    <Box
      component="div"
      sx={{
        marginLeft: "5vw",
        marginTop: "5vh",
        width: "70vw",
        borderRadius: "16px",
      }}
    >
      <Grid container spacing={5}>
        <Grid item xs>
          <Box >
            <TableContainer component={Paper} sx ={{borderRadius: "16px"}}>
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell >
                      <Typography variant="h5" sx={{ color: "white", textAlign: "center"}}>
                        {Matchdetails[0]===undefined ? 'Team1' : Matchdetails[0].name}
                      </Typography>
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {team1List.map((row) => (
                    <StyledTableRow>
                      <StyledTableCell
                        component="th"
                        scope="row"
                        sx={{ paddingLeft: "48px" }}
                      >
                        {row.name}
                        <br />
                        <font color="#A5A5A5">{row.type}</font>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Grid>

        <Grid item xs>
          <Box>
            <TableContainer component={Paper} sx ={{borderRadius: "16px"}}>
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>
                      <Typography variant="h5" sx={{ color: "white", textAlign: "center"}}>
                        {Matchdetails[1]===undefined ? 'Team2' : Matchdetails[1].name}
                      </Typography>
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {team2List.map((row) => (
                    <StyledTableRow>
                      <StyledTableCell
                        component="th"
                        scope="row"
                        sx={{ paddingLeft: "48px" }}
                      >
                        {row.name}
                        <br />
                        <font color="#A5A5A5">{row.type}</font>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
