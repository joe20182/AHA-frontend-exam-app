import {FC} from 'react';
import {RouteComponentProps} from 'react-router-dom';
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
import useAxios from '@/hooks/useAxios';

const Home: FC<RouteComponentProps> = () => {
  const {sendRequest: getAllUsers, isLoading} = useAxios({
    url: '/users/all',
    params: {
      page: 1,
      pageSize: 10,
      keyword: 'a',
    },
  });

  const handleSearch = async () => {
    const res = await getAllUsers();
    console.log(res);
  };

  return (
    <HomeWrapper>
      {/* search */}
      <SearchWrapper className="search-wrapper">
        <SearchTitle>Search</SearchTitle>
        <Input placeholder="Keyword" fullWidth className="keyword-input" />
      </SearchWrapper>
      {/* pagi */}
      <PagiWrapper>
        <SearchTitle># of results per page</SearchTitle>
        <ResultBox>
          <h4>30</h4>
          <span>results</span>
        </ResultBox>
        <PageSlider />
      </PagiWrapper>
      {/* btn */}
      <BtnWrapper>
        <Button
          size="large"
          onClick={() => handleSearch()}
          disabled={isLoading}
          fullWidth
        >
          SEARCH
        </Button>
      </BtnWrapper>
    </HomeWrapper>
  );
};

export default Home;
