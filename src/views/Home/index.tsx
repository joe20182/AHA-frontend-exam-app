import {FC} from 'react';
import {RouteComponentProps} from 'react-router-dom';
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  HomeWrapper,
  SearchWrapper,
  SearchTitle,
  PagiWrapper,
  ResultBox,
  BtnWrapper,
} from './style';
import Input from '@/ui/Input';
import Button from '@/ui/Button';
import PageSlider from '@/components/PageSlider';

const Home: FC<RouteComponentProps> = () => {
  const theme = useTheme();
  const isPC = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <HomeWrapper className={isPC ? 'isPC' : ''}>
      {/* search */}
      <SearchWrapper className="search-wrapper">
        <SearchTitle>Search</SearchTitle>
        <Input placeholder="Keyword" fullWidth className="keyword-input" />
      </SearchWrapper>
      {/* pagi */}
      <PagiWrapper className="pagi-wrapper">
        <SearchTitle># of results per page</SearchTitle>
        <ResultBox>
          <h4>30</h4>
          <span>results</span>
        </ResultBox>
        <PageSlider />
      </PagiWrapper>
      {/* btn */}
      <BtnWrapper className="btn-wrapper">
        <Button size="large">SEARCH</Button>
      </BtnWrapper>
    </HomeWrapper>
  );
};

export default Home;
