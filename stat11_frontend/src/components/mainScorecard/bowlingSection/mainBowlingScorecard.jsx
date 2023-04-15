import React from 'react'
import BowlingTable from './bowlingTable'
import { Box } from '@mui/material'

export default function MainBowlingScorecard() {
  return (
    <Box sx= {{backgroundColor: "#E5E5E5"}}>
      <BowlingTable/>
    </Box>
  )
}
