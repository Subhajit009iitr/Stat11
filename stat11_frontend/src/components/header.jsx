import { Box, Divider, Typography } from '@mui/material'
import React from 'react'

function MatchHeader(props) {
    const {primaryText, secondaryText, tossText } = props

    return (
        <>
        <Box
        sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            height: '120px',
            mt: 5,
            ml: 12,
            mr: 24
        }}
        >
            <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'flex-start'
            }}
            >
                <Typography
                variant='h3'
                sx={{
                    mb: 3
                }}
                >
                    {primaryText}
                </Typography>
                <Typography
                variant='body1'
                color='primary.main'
                sx={{
                    mb: 6
                }}
                >
                    {secondaryText}
                </Typography>
            </Box>
            <Box>
            <Typography
                variant='body1'
                color='hint.light'
                sx={{
                    mb: 6
                }}
                >
                    {`Toss: ${tossText}`}
                </Typography>
            </Box>
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

export default MatchHeader