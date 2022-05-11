import {styled} from '@mui/material/styles';
import Slider, {SliderProps} from '@mui/material/Slider';

interface MySliderProps extends SliderProps {
  current?: number;
}

const commonStyle = {
  // maxWidth: '100%',
  'height': 8,
  '& .MuiSlider-rail': {
    backgroundColor: 'rgba(255,255,255,.3)',
  },
  '& .MuiSlider-track': {
    backgroundImage: 'linear-gradient(to right, #FF5C01, #FFD25F)',
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    color: '#1B1B1B',
    border: '6px solid #FFD05D',
    width: 26,
    height: 26,
  },
  '& .MuiSlider-mark': {
    backgroundColor: 'transparent',
  },
  '& .MuiSlider-markLabel': {
    color: '#FFF',
    opacity: 0.5,
    top: 38,
  },
  // '& .MuiSlider-markLabelActive': {
  //   opacity: 1,
  // },
  '@media (pointer: coarse)': {
    '& .MuiSlider-markLabel': {
      top: 43,
    },
  },
};

export default styled(Slider)<MySliderProps>(({current}) => ({
  ...commonStyle,
  [`.MuiSlider-markLabelActive[data-index='${current}']`]: {
    opacity: 1,
  },
}));
