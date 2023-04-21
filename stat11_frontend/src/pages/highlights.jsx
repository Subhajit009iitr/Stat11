import React from 'react'
import { Box, Button, Typography, Table, TableBody, TableCell, TableRow, TableHead, TableContainer } from '@mui/material'
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SideBar from '../components/sideBar/sideBar'
import { changeSideBarTabsType } from '../features/sideBar/sideBarSlice'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMVP, sortedBatterData, sortedBowlerData } from '../features/match/matchSlice';
import Header from '../components/header'
import { useParams } from 'react-router-dom';
import MatchHeader from "../components/header";

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
    // '&:nth-of-type(odd)': {
    //   backgroundColor: theme.palette.action.hover,
    // },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  function createMvpTable( mvp, team, points ) {
    return { mvp, team, points };
  }
  function createBestBatterTable( Batter, team, runs, balls, s4, s6, SR ) {
    return { Batter, team, runs, balls, s4, s6, SR};
  }
  
  function createBestBowlerTable( Bowler, team, overs, maidens, runs, wickets, eco ) {
    return { Bowler, team, overs, maidens, runs, wickets, eco };
  }

  function addMVProws(mvpdetails)
  {
    const rowsMVP = mvpdetails.map((mvpDetail)=>{
      return createMvpTable(
          mvpDetail.playerName,
          mvpDetail.team,
          mvpDetail.mvp_score,
        )
      })
      return rowsMVP
  }

  function addbowlerrows(bowlerdetails)
  {
    const rowsBowler = bowlerdetails.slice(0,3).map((bowlerDetail)=>{
      return createBestBowlerTable(
          bowlerDetail.player.person.first_name+" "+bowlerDetail.player.person.last_name,
          bowlerDetail.team.name,
          Math.floor(bowlerDetail.balls/6),
          bowlerDetail.maidens,
          bowlerDetail.runs,
          bowlerDetail.wickets,
          bowlerDetail.economy,
        )
      })
      return rowsBowler
  }
  
  function addbatterrows(batterdetails)
  {
    const rowsbatter = batterdetails.slice(0,3).map((batterDetail)=>{
      return createBestBatterTable(
          batterDetail.player.person.first_name+" "+batterDetail.player.person.last_name,
          batterDetail.team.name,
          batterDetail.runs,
          batterDetail.balls,
          batterDetail.fours,
          batterDetail.sixes,
          batterDetail.strike_rate,
        )
      })
      return rowsbatter
  }
  
  
function Highlights() {
  const { match_id } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(
        changeSideBarTabsType('match')
      )
},[])

const batterDetails = useSelector(state=>state.match.sortedBatters)
const bowlerDetails = useSelector(state=>state.match.sortedBowlers)
const team1 = useSelector(state =>state.team.team1)
const team2 = useSelector(state =>state.team.team2)
const mvpDetails = useSelector(state=>state.match.mvp)
useEffect(() => {
  dispatch(
      sortedBatterData(match_id),
      
    )
},[])

useEffect(() => {
  dispatch(
      sortedBowlerData(match_id),
      
    )
},[])

useEffect(() => {
  dispatch(
      getMVP(match_id),     
    )
},[])
const MVProws = addMVProws(mvpDetails)
const rows_bowler = addbowlerrows(bowlerDetails)
const rows_batter = addbatterrows(batterDetails)
// console.log("Bowler Details ",bowlerDetails)
// console.log("MVP Details ", mvpDetails)

return (
    <Box component='div' sx={{ backgroundColor: '#F8F8F8', width: "80vw"}}> 
    {/* Hardcoded color */}
    {/* <SideBar/> */}
    {/* <Header /> */}
    <MatchHeader 
      primaryText={team1.name+" v/s "+team2.name} 
      secondaryText={team2.match.location} 
      tossText = {(team1.toss)?team1.name:team2.name}/>
<Card
sx={{boxShadow:"0px 0px 0px 0px",
paddingRight: '5%',
paddingLeft: '5%', //360px after nav bar
backgroundColor:"#F8F8F8" //Hardcoded here
}}
><CardContent>
    <TableContainer component={Paper} sx={{borderRadius: '16px'}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{paddingLeft:'48px'}}>MVP</StyledTableCell>
            <StyledTableCell >Team&nbsp;</StyledTableCell>
            <StyledTableCell >Points&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {MVProws.map((row) => (
            <StyledTableRow >
               <StyledTableCell component="th" scope="row" sx={{paddingLeft:'48px'}}>
                {row.mvp}
              </StyledTableCell>
              <StyledTableCell >{row.team}</StyledTableCell>
              <StyledTableCell >{row.points}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </CardContent>

    <CardContent>
    <TableContainer component={Paper} sx={{borderRadius: '16px'}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{paddingLeft:'48px'}}>Best Batter</StyledTableCell>
            <StyledTableCell >Team&nbsp;</StyledTableCell>
            <StyledTableCell >Runs&nbsp;</StyledTableCell>
            <StyledTableCell >Balls&nbsp;</StyledTableCell>
            <StyledTableCell >4s&nbsp;</StyledTableCell>
            <StyledTableCell >6s&nbsp;</StyledTableCell>
            <StyledTableCell >S.R. &nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows_batter.map((row) => (
            <StyledTableRow >
             <StyledTableCell component="th" scope="row" sx={{paddingLeft:'48px'}}>
                {row.Batter}
              </StyledTableCell>
              <StyledTableCell >{row.team}</StyledTableCell>
              <StyledTableCell >{row.runs}</StyledTableCell>
              <StyledTableCell >{row.balls}</StyledTableCell>
              <StyledTableCell >{row.s4}</StyledTableCell>
              <StyledTableCell >{row.s6}</StyledTableCell>
              <StyledTableCell >{row.SR}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </CardContent>

    <CardContent>
    <TableContainer component={Paper} sx={{borderRadius: '16px'}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{paddingLeft:'48px'}}>Best Bowler</StyledTableCell>
            <StyledTableCell >Team&nbsp;</StyledTableCell>
            <StyledTableCell >Overs&nbsp;</StyledTableCell>
            <StyledTableCell >Maidens&nbsp;</StyledTableCell>
            <StyledTableCell >Runs&nbsp;</StyledTableCell>
            <StyledTableCell >Wickets&nbsp;</StyledTableCell>
            <StyledTableCell >Eco &nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows_bowler.map((row) => (
            <StyledTableRow >
             <StyledTableCell component="th" scope="row" sx={{paddingLeft:'48px'}}>
                {row.Bowler}
              </StyledTableCell>
              <StyledTableCell >{row.team}</StyledTableCell>
              <StyledTableCell sx={{paddingLeft:"30px"}}>{row.overs}</StyledTableCell>
              <StyledTableCell sx={{paddingLeft:"40px"}}>{row.maidens}</StyledTableCell>
              <StyledTableCell sx={{paddingLeft:"20px"}}>{row.runs}</StyledTableCell>
              <StyledTableCell sx={{paddingLeft:"40px"}}>{row.wickets}</StyledTableCell>
              <StyledTableCell >{row.eco}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </CardContent>
    </Card>
    
    </Box>

  )
}

export default Highlights