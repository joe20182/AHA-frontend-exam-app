import {FC} from 'react';
import {RouteComponentProps, useHistory} from 'react-router-dom';
// import {useAppDispatch, useAppSelector} from '@/store/hooks';
// import {selectCount, incrementByAmount} from '@/store/slice/count';
import {ResultWrapper, ResultsTitle, ResultList, ResultBackIcon} from './style';
import ResultCard from './ResultCard';
import Button from '@/ui/Button';
import BackImg from '@/assets/img/back.png';

const About: FC<RouteComponentProps> = () => {
  const history = useHistory();
  // const count = useAppSelector(selectCount);
  // const dispatch = useAppDispatch();
  // const add = () => dispatch(incrementByAmount(2));

  const handleBackHome = () => {
    history.push('/');
  };

  return (
    <ResultWrapper>
      <ResultsTitle>
        <ResultBackIcon src={BackImg} onClick={handleBackHome} />
        Results
      </ResultsTitle>
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
