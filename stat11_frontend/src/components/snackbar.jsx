import React from 'react'
import { Snackbar } from '@mui/material';

function SnackBar(props) {
    const { open, message, type } = props

    console.log("Yah")

    return (
        <SnackBar
        open={open}
        message={message}
        >
            Hello
        </SnackBar>
    )
}

export default SnackBar