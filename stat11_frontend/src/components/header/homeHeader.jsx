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
        marginBottom: 3,
        marginLeft: 6,
        marginRight: 12
        }}
        />
        </>
    )
}

export default HomeHeader