import { Avatar, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Tooltip, Typography } from "@mui/material"
import defaultAvatar2 from '../../assets/defaultAvatar2.png'

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
          mr: 5,
          ml: 5,
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

export const standardAvatarListItemGenerator = (primaryText, secondaryText, avatar=defaultAvatar2) => {
  return (
    <ListItem 
      alignItems="flex-start"
      >
        <ListItemAvatar>
            <Avatar
            alt="avatar" 
            src={avatar}
            />
        </ListItemAvatar>
        <ListItemText
        primary={
            <>
            <Typography
            variant='body2'
            >
                {primaryText}
            </Typography>
            </>
        }
        secondary={
            <>
            <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="small1"
                color="hint.light"
            >
                {secondaryText}
            </Typography>
            </>
        }
        />
      </ListItem>
  )
}

export const playersListTooltipGenerator = (players) => {
  
  const playerListItem = (player) => {
    return (
      <ListItem
      disablePadding
      sx={{
        minWidth: 120,
        pl: 2
      }}
      >
        <ListItemText
        primary={
            <>
            <Typography
            variant='small1'
            >
                {player['person']['username']}
            </Typography>
            </>
        }
        secondary={
            <>
            <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="small2"
                color="hint.light"
            >
                {`${player['person']['first_name']} ${player['person']['last_name']} — (${player['type']})`}
            </Typography>
            </>
        }
        />
      </ListItem>
    )
  }

  const playersList = players.length>0 ? 
  (
    players.map(player => playerListItem(player))
  ) :
  []

  return (
    <List>
      {playersList}
    </List>
  )
}

export const teamOptionComponentGenerator = (team) => {
  const collegeName = team['college']!==null || team['college']!=='' ? 'No-College' : team['college']

  return (
    <Tooltip
    arrow
    placement='right'
    title={playersListTooltipGenerator(team['players'])}
    >
      {/* <ListItem 
      alignItems="flex-start"
      >
          <ListItemAvatar>
              <Avatar
              alt="avatar" 
              src={defaultAvatar2}
              />
          </ListItemAvatar>
          <ListItemText
          primary={
              <>
              <Typography
              variant='body2'
              >
                  {team['name']}
              </Typography>
              </>
          }
          secondary={
              <>
              <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="small1"
                  color="hint.light"
              >
                  {collegeName}
              </Typography>
              </>
          }
          />
      </ListItem> */}
      {standardAvatarListItemGenerator(
        team['name'],
        collegeName
      )}
    </Tooltip>
  )
}