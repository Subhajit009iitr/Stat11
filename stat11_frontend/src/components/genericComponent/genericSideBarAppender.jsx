import { Box } from "@mui/material"
import SideBar from "../sideBar/sideBar"

export const pageSideBarAppender = (contentComponent) => {
    return (
        <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: "background.default",
            backgroundAttachment: 'fixed',
            height: "100vh"
        }}
        >
            <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}
            >
                <Box>
                    <SideBar />
                </Box>
                <Box
                sx={{
                    flexGrow: 1,
                    marginLeft: '20%'
                }}
                >
                    {contentComponent}
                </Box>
            </Box>
        </Box>
    )
}