import { Box, CardContent, Typography } from '@mui/material'
import React from 'react'

function HelpContentSection(props) {
    const { question, text } = props

    return (
        <CardContent
        sx={{
            ml: 10,
            mr: 10
        }}
        >
            <Typography
                variant="body1"
                color="primary.main"
                align='left'
                sx={{
                    mb: 4
                }}
            >
                {question}
            </Typography>
            <Typography
                variant="body2"
                color="hint.main"
                align='justify'
            >
                {text}
            </Typography>
        </CardContent>
    )
}

export default HelpContentSection