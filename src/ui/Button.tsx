import {styled} from '@mui/material/styles';
import Button, {ButtonProps} from '@mui/material/Button';

const commonStyle = {
  maxWidth: '100%',
  backgroundColor: '#FFF',
  borderRadius: '4px',
  fontWeight: 700,
  border: '1px solid #FFF',
  // 'padding': '8px 10px',
};

export default styled(Button)<ButtonProps>(({variant, size, theme}) => ({
  ...commonStyle,
  'color': variant === 'outlined' ? '#FFF' : '#121212',
  'backgroundColor': variant === 'outlined' ? '#121212' : '#FFF',
  // 'width': size === 'large' ? 343 : 'auto',
  'fontSize': size === 'large' ? 14 : 12,
  'height': size === 'large' ? 40 : 28,
  'borderRadius': size === 'large' ? 4 : 20,
  '&:hover': {
    backgroundColor: variant === 'outlined' ? '#FFF' : '#121212',
    color: variant === 'outlined' ? '#121212' : '#FFF',
    border: '1px solid #FFF',
  },
  [theme.breakpoints.up('sm')]: {
    maxWidth: size === 'large' ? 343 : 'auto',
  },
}));
