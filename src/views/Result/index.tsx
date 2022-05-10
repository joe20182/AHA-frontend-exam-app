import {FC} from 'react';
import {RouteComponentProps} from 'react-router-dom';
// import {useAppDispatch, useAppSelector} from '@/store/hooks';
// import {selectCount, incrementByAmount} from '@/store/slice/count';
import {ResultWrapper, ResultsTitle, ResultList} from './style';
import ResultCard from './ResultCard';
import Button from '@/ui/Button';

const About: FC<RouteComponentProps> = () => {
  // const count = useAppSelector(selectCount);
  // const dispatch = useAppDispatch();
  // const add = () => dispatch(incrementByAmount(2));

  return (
    <ResultWrapper>
      <ResultsTitle>Results</ResultsTitle>
      <ResultList>
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
      </ResultList>
      <Button size="large" fullWidth>
        MORE
      </Button>
    </ResultWrapper>
  );
};

export default About;
