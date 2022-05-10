import {FC, useState, ChangeEvent} from 'react';
import {RouteComponentProps, useHistory} from 'react-router-dom';
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
  const history = useHistory();
  const [keyword, setKeyword] = useState('');
  const [resPerPage, setResPerPage] = useState(3);

  const handleSearch = async () => {
    history.push(
      `/result?page=1&pageSize=${mapResultsValue(
        resPerPage,
      )}&keyword=${keyword}`,
    );
  };

  const handleChangeSlider = (e: Event, newValue: number | number[]) => {
    const v = newValue as number;
    setResPerPage(v);
  };

  const mapResultsValue = (index: number) => {
    const map = [
      {index: 1, value: 3},
      {index: 2, value: 6},
      {index: 3, value: 9},
      {index: 4, value: 12},
      {index: 5, value: 15},
      {index: 6, value: 50},
    ];
    return map.find((item) => item.index === index)?.value;
  };

  const handleChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return (
    <HomeWrapper>
      {/* search */}
      <SearchWrapper className="search-wrapper">
        <SearchTitle>Search</SearchTitle>
        <Input
          placeholder="Keyword"
          fullWidth
          className="keyword-input"
          value={keyword}
          onChange={handleChangeKeyword}
        />
      </SearchWrapper>
      {/* pagi */}
      <PagiWrapper>
        <SearchTitle># of results per page</SearchTitle>
        <ResultBox>
          <h4>{mapResultsValue(resPerPage)}</h4>
          <span>results</span>
        </ResultBox>
        <PageSlider value={resPerPage} onChange={handleChangeSlider} />
      </PagiWrapper>
      {/* btn */}
      <BtnWrapper>
        <Button size="large" onClick={() => handleSearch()} fullWidth>
          SEARCH
        </Button>
      </BtnWrapper>
    </HomeWrapper>
  );
};

export default Home;
