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
import { matchTeams,getAllMatchAndTeams } from "../../features/match/matchSlice";

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

export default function DisplayTeamLists() {

  const Matchdetails = useSelector(state =>state.match.matchAndTeamsList)
  const Team = useSelector(state => state.match.Teams);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllMatchAndTeams())
    dispatch(matchTeams())
  },[])

  console.log("Yesss");
  const team1List = Team[0];
  console.log("Yes");
  const team2List = Team[1];
  
  return (
    <Box
      component="div"
      sx={{
        marginLeft: "27%",
        marginTop: "2%",
        width: "65%",
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
                        {Matchdetails[0].name}
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
                        {Matchdetails[1].name}
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
