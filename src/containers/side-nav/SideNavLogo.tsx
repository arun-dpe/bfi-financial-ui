import React from 'react';
import { Box } from '@common/components';
import logo from '../../assets/images/Retirement_All_White_Short.png';

export default function SideNavLogo() {
  return (
    <Box sx={{ img: { objectFit: 'contain', height: '100px', width: '100%' } }}>
      <img src={logo} alt="main logo" />
    </Box>
  );
}
