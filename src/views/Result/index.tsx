import {FC, useEffect, useState} from 'react';
import {RouteComponentProps, useHistory, useLocation} from 'react-router-dom';
import queryString from 'query-string';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
// import {useAppDispatch, useAppSelector} from '@/store/hooks';
// import {selectCount, incrementByAmount} from '@/store/slice/count';
import {ResultWrapper, ResultsTitle, ResultList, ResultBackIcon} from './style';
import ResultCard from './ResultCard';
import Button from '@/ui/Button';
import BackImg from '@/assets/img/back.png';
import useAxios from '@/hooks/useAxios';

interface SearchState {
  page: number;
  pageSize?: number;
  keyword?: string;
  totalPages: number;
}

interface SearchParams {
  page?: number;
  pageSize?: number;
  keyword?: string;
}

interface Result {
  avatar: string;
  id: string;
  isFollowing: boolean;
  name: string;
  username: string;
}

type ResultList = Result[];

const About: FC<RouteComponentProps> = () => {
  const history = useHistory();
  const location = useLocation();
  const [params, setParams] = useState<SearchState>({page: 0, totalPages: 1});
  const [list, setList] = useState<ResultList>([]);
  // const count = useAppSelector(selectCount);
  // const dispatch = useAppDispatch();
  // const add = () => dispatch(incrementByAmount(2));

  const {sendRequest: getAllUsersAPI, isLoading} = useAxios({
    url: '/users/all',
  });

  useEffect(() => {
    const obj: SearchParams = queryString.parse(location.search);
    // console.log(obj);
    setParams((preState) => {
      return {
        ...preState,
        page: 1,
        pageSize: Number(obj.pageSize) || 9,
        keyword: obj.keyword || '',
      };
    });
  }, []);

  useEffect(() => {
    // console.log(123, params);
    if (!params.page) return;
    if (params.page > params.totalPages) return;
    getAllUsers(params);
  }, [params.page]);

  const getAllUsers = async (obj: SearchState) => {
    const res = await getAllUsersAPI({params: obj});
    if (res) {
      setList((preState) => {
        return [...preState, ...res.data];
      });
      setParams((preState) => {
        return {
          ...preState,
          totalPages: res.totalPages,
        };
      });
    }
  };

  const handleBackHome = () => {
    history.push('/');
  };

  const handleClickMore = () => {
    setParams((preState) => {
      return {
        ...preState,
        page: preState.page + 1,
      };
    });
  };

  return (
    <ResultWrapper>
      <Backdrop open={isLoading} sx={{zIndex: 1}}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <ResultsTitle>
        <ResultBackIcon src={BackImg} onClick={handleBackHome} />
        Results
      </ResultsTitle>
      <ResultList>
        {list.map((item) => (
          <ResultCard key={item.id} title={item.name} author={item.username} />
        ))}
      </ResultList>
      <Button size="large" fullWidth onClick={handleClickMore}>
        MORE
      </Button>
    </ResultWrapper>
  );
};

export default About;
