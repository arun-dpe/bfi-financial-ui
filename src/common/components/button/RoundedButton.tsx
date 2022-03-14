import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

const RoundedButton = styled(Button, {
  // Configure which props should be forwarded on DOM
  shouldForwardProp: (prop) => prop !== 'color' && prop !== 'variant',
  name: 'MuiButton',
  slot: 'Root',
  // We are specifying here how the styleOverrides are being applied based on props
  overridesResolver: (props, styles) => [
    styles.root,
    props.color === 'primary' && styles.primary,
    props.color === 'secondary' && styles.secondary,
  ],
})<ButtonProps>(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: theme.shape.borderRadius,
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  height: 36,
  minWidth: 100,
  marginRight: 10,
  ':hover': {
    color: theme.palette.primary.main,
  },
}));

export default RoundedButton;
