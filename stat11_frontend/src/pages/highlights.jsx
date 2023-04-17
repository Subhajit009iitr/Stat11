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
import { getMVP,batterScoreData, bowlerScoreData } from '../features/match/matchSlice';

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
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
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

  // const rows_batter = [
  //   createBestBatterTable('1.Raiwat Bapat', 'Ganga Goberdhan', 6.0, 8, 1, 0, 5.5),
  //   createBestBatterTable('2.Nishita sandwich', 'Kb Baby', 6.0, 8, 1, 0, 5.5),
  //   createBestBatterTable('3.Manashree Eclair', 'Kb Baby', 6.0, 8, 1, 0, 5.5),
  // ];

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
    const rowsBowler = bowlerdetails.map((bowlerDetail)=>{
      return createBestBowlerTable(
          bowlerDetail.player.person.first_name+" "+bowlerDetail.player.person.last_name,
          bowlerDetail.team.name,
          bowlerDetail.overs,
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
    const rowsbatter = batterdetails.map((batterDetail)=>{
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
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(
        changeSideBarTabsType('match')
      )
},[])

const batterDetails = useSelector(state=>state.match.batterScores)
const bowlerDetails = useSelector(state=>state.match.bowlerScores)
const mvpDetails = useSelector(state=>state.match.mvp)
useEffect(() => {
  dispatch(
      batterScoreData(),
      
    )
},[])

useEffect(() => {
  dispatch(
      bowlerScoreData(),
      
    )
},[])

useEffect(() => {
  dispatch(
      getMVP(),     
    )
},[])
const MVProws = addMVProws(mvpDetails)
const rows_bowler = addbowlerrows(bowlerDetails)
const rows_batter = addbatterrows(batterDetails)
console.log("Bowler Details ",bowlerDetails)
console.log("MVP Details ", mvpDetails)

return (
    
    <div>
        <SideBar/>
        <Typography component='box'
        sx={{
            fontSize:'32px',
            float:'left',
            paddingLeft:'25%',
            paddingTop:'72px',
            paddingBottom:'10px',
        }}>
            Purple Team v/s Orange Team 
            <br /> 
            <Typography component='box'
            sx={{
                color:'#448791',
                fontSize :'20px',
                float:'left'
            }}>Location, City, State &nbsp;
            </Typography>
                <Typography component='box'
                sx={{
                color:'#797979',
                fontSize :'20px',
                float:'left'
            }}> 20 Overs
            </Typography>
        </Typography>
       
            <Typography component='box'
                sx={{
                color:'#797979',
                fontSize :'20px',
                textAlign: 'right',
                paddingTop: '80px',
                paddingRight: '160px',    
                float:'right'
            }}> Toss: <br/>
             Purple Team
            </Typography>

        

        <Typography component='box' sx={{backgroundColor:'#D9D9D9'}}>  
            <hr style={{width: '96vw'}}/>
        </Typography>

<Card
sx={{boxShadow:"0px 0px 0px 0px",
paddingRight: '116px',
paddingLeft: '25%', //360px after nav bar

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
              <StyledTableCell >{row.overs}</StyledTableCell>
              <StyledTableCell >{row.maidens}</StyledTableCell>
              <StyledTableCell >{row.runs}</StyledTableCell>
              <StyledTableCell >{row.wickets}</StyledTableCell>
              <StyledTableCell >{row.eco}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </CardContent>
    </Card>
    
    </div>
  )
}

export default Highlights