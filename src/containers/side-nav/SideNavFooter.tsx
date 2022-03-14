import React from 'react';
import { MenuList, MenuItem, Typography } from '@mui/material';

const navFooter = ['Notification', 'Setting', 'Contact Us', 'Log Out'];

export default function SideNavFooter() {
  return (
    <MenuList sx={{ paddingBottom: 0 }}>
      {navFooter.map((footerItem) => (
        <MenuItem
          key={footerItem}
        >
          <Typography variant="subtitle2">
            {footerItem}
          </Typography>
        </MenuItem>
      ))}
    </MenuList>
  );
}
