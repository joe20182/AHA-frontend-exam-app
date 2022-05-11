import {FC} from 'react';
import {ResultItem, ResultImg, ResultTitle, ResultSubtitle} from './style';

interface ResultProp {
  title: string;
  author: string;
}

const ResultCard: FC<ResultProp> = ({title, author}) => {
  return (
    <ResultItem>
      <ResultImg />
      <ResultTitle>{title}</ResultTitle>
      <ResultSubtitle>by {author}</ResultSubtitle>
    </ResultItem>
  );
};

export default ResultCard;
