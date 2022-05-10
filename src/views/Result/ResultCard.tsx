import {FC} from 'react';
import {ResultItem, ResultImg, ResultTitle, ResultSubtitle} from './style';

const ResultCard: FC = () => {
  return (
    <ResultItem>
      <ResultImg />
      <ResultTitle>title</ResultTitle>
      <ResultSubtitle>by xxx</ResultSubtitle>
    </ResultItem>
  );
};

export default ResultCard;
