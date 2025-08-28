import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Cloud from '@mui/icons-material/Cloud';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import InfoIcon from '@mui/icons-material/Info';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Chip from '@mui/material/Chip';



export default function IconMenu() {
  return (
    <Paper sx={{ width: 320, maxWidth: '100%' }}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <Badge color="primary" variant="dot" overlap="circular">
              <NotificationsIcon fontSize="small" />
            </Badge>
          </ListItemIcon>
          <ListItemText>Notifications</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <InfoIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Product Feedback</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <HelpOutlineIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Help</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>
          <ListItemText>Web Clipboard</ListItemText>
          <Chip label="2" size="small" variant="outlined" sx={{ ml: 'auto' }} />
        </MenuItem>
      </MenuList>
    </Paper>
  );
}