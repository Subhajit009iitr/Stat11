import { Box, Divider, Typography } from '@mui/material'
import React from 'react'

function HomeHeader(props) {
    const { headingText } = props

    return (
        <>
        <Box
        sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-end',
            height: '120px',
            mt: 5,
            ml: 12
        }}
        >
            <Typography
            variant='h3'
            sx={{
                mb: 9
            }}
            >
                {headingText}
            </Typography>
        </Box>
        <Divider
        sx={{
            backgroundColor: "hint",
            mb: 3,
            ml: 10,
            mr: 20
        }}
        />
        </>
    )
}

export default HomeHeader