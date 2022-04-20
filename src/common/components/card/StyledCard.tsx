import { styled } from '@mui/material/styles';
import Card, { CardProps } from '@mui/material/Card';

const StyledCard = styled(Card)<CardProps>(({ theme }) => ({
  margin: theme.spacing(2),
  textAlign: 'left',
  fontFamily: theme.typography.fontFamily,
  borderRadius: theme.spacing(0.5),
  padding: theme.spacing(2.5),
}));

export default StyledCard;
