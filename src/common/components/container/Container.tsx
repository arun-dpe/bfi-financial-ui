import { styled } from '@mui/material/styles';
import Container, { ContainerProps } from '@mui/material/Container';

const StyledContainer = styled(Container)<ContainerProps>(({ theme }) => ({
  paddingLeft: 0,
  paddingRight: 0,
  marginBottom: theme.spacing(1),
  textAlign: 'left',
  fontFamily: theme.typography.fontFamily,
}));

export default StyledContainer;
