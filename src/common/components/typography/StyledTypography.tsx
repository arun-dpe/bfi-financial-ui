import { styled } from '@mui/material/styles';
import Typography, { TypographyProps } from '@mui/material/Typography';

const StyledTypography = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: 'normal',
  color: theme.palette.success.main,
  marginBottom: theme.spacing(1),
}));

export default StyledTypography;
