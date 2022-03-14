import React from 'react';
import { Box } from '@common/components';
import { Typography } from '@common/components/typography';
import StyledContainer from '../container/Container';

export default function Footer() {
  return (
    <StyledContainer sx={{ marginTop: 2 }}>
      <Typography sx={{ color: 'info.contrastText' }}>
        &copy;2019 BFI RETIREMENT. All rights reserved
      </Typography>
      <Typography sx={{ color: 'info.contrastText' }}>
        <Box component="span" sx={{ color: 'primary.main', textDecoration: 'underline', marginRight: '5px' }}>Terms of Use</Box>
        <Box component="span" sx={{ color: 'primary.main', textDecoration: 'underline', marginRight: '5px' }}>
          Account Protection Policy
        </Box>
        <Box component="span" sx={{ color: 'primary.main', textDecoration: 'underline', marginRight: '5px' }}>Privacy</Box>
        CRN202105-248940
      </Typography>
    </StyledContainer>
  );
}
