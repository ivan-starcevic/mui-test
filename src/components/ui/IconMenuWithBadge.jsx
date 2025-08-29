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
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 11,
        border: `2px solid ${((theme.vars ?? theme).palette.background).paper}`,
        padding: '0 4px',
    },
}));

export default function IconMenu() {
    return (
        <Paper sx={{ width: 320, maxWidth: '100%' }}>
            <MenuList>
                <MenuItem>
                    <ListItemIcon>
                        <Badge color="primary" variant="dot" overlap="circular">
                            <NotificationsIcon fontSize="medium" />
                        </Badge>
                    </ListItemIcon>
                    <ListItemText>Notifications</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <StyledBadge badgeContent={4} color="secondary">
                            <InfoIcon fontSize="medium" />
                        </StyledBadge>
                    </ListItemIcon>
                    <ListItemText>Product Feedback</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <HelpOutlineIcon fontSize="medium" />
                    </ListItemIcon>
                    <ListItemText>Help</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemIcon>
                        <Cloud fontSize="medium" />
                    </ListItemIcon>
                    <ListItemText>Web Clipboard</ListItemText>
                    <Chip label="2" size="small" variant="solid" color="primary" sx={{ ml: 'auto' }} />
                </MenuItem>
            </MenuList>
        </Paper>
    );
}