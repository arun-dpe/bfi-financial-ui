import React from 'react';
import {
  styled, useTheme, Theme, CSSObject,
} from '@mui/material/styles';
import { Box, MenuIcon } from '@common/components/';
import MuiDrawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export default function Nav({ children }: any) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        open={open}
      >
        <DrawerHeader sx={{ backgroundColor: theme.palette.secondary.main }}>
          <IconButton onClick={handleDrawer}>
            <MenuIcon sx={{ color: theme.palette.info.main }} />
          </IconButton>
        </DrawerHeader>
        <Box sx={{
          height: '100%',
          backgroundColor: theme.palette.secondary.main,
          color: 'white',
        }}
        >
          { children }
        </Box>
      </Drawer>
    </Box>
  );
}
