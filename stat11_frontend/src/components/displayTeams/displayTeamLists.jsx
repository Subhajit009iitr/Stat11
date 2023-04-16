import React from "react";
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

function createRow(name, playerType) {
  return { name, playerType };
}

const team1List = [
  createRow("Virat Kohli", "Batter"),
  createRow("Faf Du Plessis", "Batter"),
  createRow("Glenn Maxwell", "Batter"),
  createRow("Dinesh Karthik", "Batter"),
  createRow("Mahipal Lomror", "Batter"),
  createRow("Shahbaz Ahmed", "All Rounder"),
  createRow("David Willey", "All Rounder"),
  createRow("Wayne Parnell", "All Rounder"),
  createRow("Harshal Patel", "All Rounder"),
  createRow("Mohmammed Siraj", "Bowler"),
  createRow("Karn Sharma", "Bowler"),
];

const team2List = [
    createRow("Kyle Mayers", "Batter"),
  createRow("KL Rahul", "Batter"),
  createRow("Marcus Stoinis", "Batter"),
  createRow("Krunal Pandya", "All Rounder"),
  createRow("Nicholas Pooran", "Batter"),
  createRow("Jaydev Unadkat", "Bowler"),
  createRow("Amit Mishra", "Bowler"),
  createRow("Avesh Khan", "Bowler"),
  createRow("Mark Wood", "Bowler"),
  createRow("Ravi Bishnoi", "Bowler"),
  createRow("Ayush Badoni", "Batter"),
  ];

export default function DisplayTeamLists(props) {
  return (
    <Box
      component="div"
      sx={{
        marginLeft: "27%",
        marginTop: "2%",
        width: "65%",
        borderRadius: "16px",
        // marginRight: "80%"
      }}
    >
      <Grid container spacing={5}>
        <Grid item xs>
          <Box>
            <TableContainer component={Paper}>
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell >
                      <Typography variant="h3" sx={{ color: "white", textAlign: "center"}}>
                        {props.team1Name}
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
                        <font color="#A5A5A5">{row.playerType}</font>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Grid>
        {/* <Divider
          orientation="vertical"
          flexItem
          sx={{ backgroundColor: "white", borderRightWidth: 5 }}
        /> */}
        <Grid item xs>
          <Box>
            <TableContainer component={Paper}>
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>
                      <Typography variant="h3" sx={{ color: "white", textAlign: "center"}}>
                        {props.team2Name}
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
                        <font color="#A5A5A5">{row.playerType}</font>
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
