import { styled } from '@mui/material/styles';
import MenuItem, { MenuItemProps } from '@mui/material/MenuItem';

const StyledSideNavMenuItem = styled(MenuItem)<MenuItemProps>(() => ({
  paddingBottom: 10,
  textTransform: 'uppercase',
  color: 'white',
  a: {
    color: 'white',
    textTransform: 'uppercase',
    textDecoration: 'none',
  },
}));

export default StyledSideNavMenuItem;
