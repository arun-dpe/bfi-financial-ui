import React from 'react';
import { Outlet } from 'react-router-dom';
import { SideNav } from '@containers/side-nav';
import { ThemeProvider } from 'src/theme';
import { Grid, Box, Hidden } from '@common/components';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Grid
        container
        sx={{
          padding: { xs: 0, sm: 0, md: 0 },
          margin: { xs: 0, sm: 0, md: 0 },
        }}
      >
        <Hidden mdDown>
          <SideNav />
        </Hidden>
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Outlet />
        </Box>
      </Grid>
    </ThemeProvider>
  );
}
