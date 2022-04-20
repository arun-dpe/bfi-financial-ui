import React from 'react';
import { Box } from '@common/components';
import { theme } from 'src/theme/CustomThemeProvider';
import StyledTypography from '../typography/Typography';

interface PageTitle {
  title: string;
}

export default function AppHeader({ title }:PageTitle) {
  return (
    <Box component="div" sx={{ margin: 3 }}>
      <StyledTypography variant="subtitle2" color={theme.palette.info.contrastText} sx={{ fontWeight: 600 }}>
        SAMPLE RETIREMENT PLAN . DATA AS OF 10/15/20XX
      </StyledTypography>
      <StyledTypography variant="h4" color={theme.palette.info.contrastText} sx={{ fontWeight: 500 }}>
        {title}
      </StyledTypography>
    </Box>
  );
}
