import { Alert, IconButton, Snackbar } from '@mui/material'
import React from 'react'
import { GrClose } from 'react-icons/gr'

function MySnackbar(props) {
    const { open, onClose, severity, message } = props

    return (
        <Snackbar
        open={open}
        onClose={onClose}
        autoHideDuration={4000}
        action={
            <>
                <IconButton
                size="small"
                color="inherit"
                onClick={onClose}
                >
                <GrClose />
                </IconButton>
            </>
        }
        >
        <Alert 
        onClose={onClose} 
        severity={severity} 
        sx={{ width: '100%' }}
        >
            {message}
        </Alert>
        </Snackbar>
    )
}

export default MySnackbar