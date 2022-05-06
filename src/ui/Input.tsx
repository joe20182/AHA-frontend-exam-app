import {styled} from '@mui/material/styles';
import OutlinedInput, {OutlinedInputProps} from '@mui/material/OutlinedInput';

const commonStyle = {
  'fontSize': 14,
  'color': '#FFF',
  '& .MuiOutlinedInput-input': {
    padding: '20px 18px',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: '3px solid rgba(255, 255, 255, 0.5)',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    border: '3px solid rgba(255, 255, 255, 0.5)',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: '3px solid #FF9B33',
  },
};

export default styled(OutlinedInput)<OutlinedInputProps>(() => ({
  ...commonStyle,
}));
