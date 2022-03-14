import { styled } from '@mui/material/styles';
import Typography, { TypographyProps } from '@mui/material/Typography';

const StyledTypography = styled(Typography)<TypographyProps>(({ theme, color }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: 'normal',
  color: (color as string) ?? theme.palette.primary.contrastText,
  marginBottom: theme.spacing(1),
}));

export default StyledTypography;
