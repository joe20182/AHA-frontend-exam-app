import {FC} from 'react';
import Slider from '@/ui/Slider';

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

const calculateValue = (value: number) => {
  const current = marks[value - 1];
  return current.scaledValue;
};

const PageSlider: FC = () => {
  return (
    <Slider marks={marks} min={1} max={6} step={null} scale={calculateValue} />
  );
};

export default PageSlider;
