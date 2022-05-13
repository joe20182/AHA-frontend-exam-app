import {FC} from 'react';
import {SliderProps} from '@mui/material/Slider';
import Slider from '@/ui/Slider';

/**
 * value指定1~6已達成刻度等距
 * 真正對應的value在Home組件中mapping
 * 這邊可以把mapping表拆出成constant file
 */
const marks = [
  {
    value: 1,
    scaledValue: 3,
    label: '3',
  },
  {
    value: 2,
    scaledValue: 6,
    label: '6',
  },
  {
    value: 3,
    scaledValue: 9,
    label: '9',
  },
  {
    value: 4,
    scaledValue: 12,
    label: '12',
  },
  {
    value: 5,
    scaledValue: 15,
    label: '15',
  },
  {
    value: 6,
    scaledValue: 50,
    label: '50',
  },
];

/**
 * @param {number} value
 * @return {number} real value of the page slider
 */
// const calculateValue = (value: number) => {
//   const current = marks[value - 1];
//   return current.scaledValue;
// };

const PageSlider: FC<SliderProps> = (props) => {
  // console.log(props);
  const value = props.value as number;
  return (
    <Slider
      marks={marks}
      min={1}
      max={6}
      step={null}
      current={value - 1}
      {...props}
    />
  );
};

export default PageSlider;
