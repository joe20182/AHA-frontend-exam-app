import {FC, useState, useEffect} from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import {FollowWrapper, FollowTabs, FollowTab, ListWrapper} from './style';
import Followers from './Followers';
import useAxios from '@/hooks/useAxios';

interface User {
  avatar: string;
  id: string;
  isFollowing: boolean;
  name: string;
  username: string;
}

type UserList = User[];

interface UserPagi {
  current: number;
  totalPages: number;
}

const Follow: FC = () => {
  const [tab, setTab] = useState(1);
  const [userList, setUserList] = useState<UserList>([]);
  const [userPagi, setUserPagi] = useState<UserPagi>({
    current: 0,
    totalPages: 1,
  });
  const {sendRequest: getAllUsers, isLoading: isLoadingAllUsers} = useAxios({
    url: '/users/all',
  });
  // const {sendRequest: getAllFriends} = useAxios({
  //   url: '/users/friends',
  // });

  useEffect(() => {
    // console.log('AAA', userPagi);
    if (!userPagi.current || userPagi.current > userPagi.totalPages) return;
    handleGetAllUsers();
  }, [userPagi.current]);

  const handleGetAllUsers = async () => {
    const res = await getAllUsers({
      params: {
        page: userPagi.current,
        pageSize: 20,
      },
    });
    if (res) {
      setUserList([...userList, ...res.data]);
      setUserPagi((pre) => {
        return {
          ...pre,
          totalPages: res.totalPages,
        };
      });
    }
  };

  const handleClick = (index: number) => {
    setTab(index);
  };

  const handleScrollAllUsers = () => {
    if (userPagi.current > userPagi.totalPages) return;
    setUserPagi((preState) => {
      return {
        ...preState,
        current: preState.current + 1,
      };
    });
  };

  return (
    <FollowWrapper>
      <Backdrop className="follow-spinner" open={isLoadingAllUsers}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {/* tabs */}
      <FollowTabs>
        <FollowTab
          className={tab === 1 ? 'active' : ''}
          onClick={() => handleClick(1)}
        >
          Followers
        </FollowTab>
        <FollowTab
          className={tab === 2 ? 'active' : ''}
          onClick={() => handleClick(2)}
        >
          Following
        </FollowTab>
      </FollowTabs>
      {/* list */}
      <ListWrapper>
        <Followers
          list={userList}
          onScrollEnd={handleScrollAllUsers}
          hasMore={userPagi.current <= userPagi.totalPages}
        />
      </ListWrapper>
    </FollowWrapper>
  );
};

export default Follow;
