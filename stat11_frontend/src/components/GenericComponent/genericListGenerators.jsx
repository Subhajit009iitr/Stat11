import { ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material"

export const listButtonGenerator = (itemIcon, itemText, clickHandler = () => false, bgColor, typographyColor='hint.light') => {
    return (
        <ListItemButton
        disableRipple
        key={itemText}
        sx={{
          borderRadius: 2,
          backgroundColor: bgColor,
          mt: 0.5,
          mb: 1,
          '&:hover':{
            backgroundColor: 'primary.light'
          }
        }}
        onClick={() => clickHandler(itemText)}
        >
          <ListItemIcon>
            {itemIcon}
          </ListItemIcon>
          <ListItemText>
            <Typography
            variant='body1'
            color={typographyColor}
            >
              {itemText}
            </Typography>
          </ListItemText>
        </ListItemButton>
    )
}