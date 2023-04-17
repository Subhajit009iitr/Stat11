import * as React from 'react';
import coin from '../../assets/Coin.svg'
import { Box, Button, Hidden, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import theme from '../../index';
import CardContent from '@mui/material/CardContent';
import { display } from '@mui/system';

function MatchCard(props) {
    var winteam = (props.team1runs<props.team2runs)? props.team2:props.team1;
    //console.log(winteam);
    const winner = <Box component={'span'}
            sx={{
                display:'inline-flex',
                paddingRight:'20px',
                float:'right',
                fontSize:'1.5rem',
                color: '#7D7D7D',
                paddingTop: '20px',
                paddingBottom: '20px'
            }}
        >
            Winner: {winteam}</Box>
    
     const live = <CardActions style={{float: 'right'}}>
        <Box component='span' style={{backgroundColor:'red', borderRadius:20 }}>
          <Button size="small" style={{color:'white'}}>LIVE</Button>
        </Box>
      </CardActions> 
    
   
    const result = (props.matchover === "1")? winner:live;
    
    const cooin= <Box component="img" src={coin} sx={{width: '20px', height: '20px'}}/>
    const toss2 = ( props.toss === "1")? '':cooin;
    //console.log(toss2);
    const toss1 = ( props.toss === "1")? cooin:'';
    //console.log(toss1);
    return (
    <div style={{padding:20 }}>
    <Card sx={{ 
        width: '320px', 
        height: '240px',
        boxShadow:"4px 4px 4px 4px #D9D9D9", 
        borderRadius: '16px', 
     }}>
      <CardContent>
          <Typography component="box" 
                sx={{
                    float: 'right',
                    color: 'gray',
                    paddingRight: '20px',
                    fontSize: '1.5rem',
                }}
                >
                    {props.no_of_overs} overs
            </Typography>
            <br/>
            <br/>

            <Typography component="box">
            <Box sx={{display:'block', paddingBottom:2}}>
                <Box
                    sx={{
                        
                        float: 'left',
                        display: 'inline-flex',
                        width: 28,
                        height: 20,
                        backgroundColor: 'blue',
                        fontSize: '2rem',
                        color:'gray'
                    }}/>
                <Box component={'span'} sx={{float: 'left', textAlign: 'left'}}>
                    &nbsp;
                    {props.team1} &nbsp;
                    {toss1}

                    <br/>
                    <Typography component="box"
                        sx={{
                            color: 'gray',
                            fontSize: '1.5rem',
                        }}
                    >&nbsp;
                    ({props.team1college})</Typography>
                </Box>
            </Box>
            <Box component={'span'} sx={{
                float:'right',
                paddingRight: '20px'
            }}>{props.team1runs}-{props.team1wickets}</Box>
            <br/><br/>

            <Box sx={{display:'block'}}>
                <Box
                    sx={{
                        float: 'left',
                        display: 'inline-flex',
                        width: 28,
                        height: 20,
                        backgroundColor: 'purple',
                        fontSize: '2rem',
                        color:'gray'
                    }}/>
                <Box component={'span'} sx={{float: 'left', textAlign: 'left'}}>
                &nbsp;
                {props.team2} &nbsp; 
                        {toss2}
                    <br/>
                    <Typography component="box"
                        sx={{
                            color: 'gray',
                            fontSize: '1.5rem',
                        }}
                    >&nbsp;({props.team2college})</Typography>
                </Box>
            </Box>
            <Box component={'span'} sx={{
                float:'right',
                paddingRight: '20px'
            }}>{props.team2runs}-{props.team2wickets}</Box>
            <br/><br/>

          </Typography>
          {result}
      </CardContent>
        
    </Card>
    
    
    </div>
  );
}

export default MatchCard