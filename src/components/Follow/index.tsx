import {FC, useState, useEffect} from 'react';
import {FollowWrapper, FollowTabs, FollowTab, ListWrapper} from './style';
import Follower from './Follower';
import useAxios from '@/hooks/useAxios';

interface User {
  avatar: string;
  id: string;
  isFollowing: boolean;
  name: string;
  username: string;
}

type UserList = User[];

const Follow: FC = () => {
  const [tab, setTab] = useState(1);
  const [userList, setUserList] = useState<UserList>([]);
  const {sendRequest: getAllUsers} = useAxios({
    url: '/users/all',
    params: {
      page: 1,
      pageSize: 10,
    },
  });
  // '/users/friends'

  useEffect(() => {
    handleGetAllUsers();
  }, []);

  const handleGetAllUsers = async () => {
    const res = await getAllUsers();
    console.log(res);
    setUserList(res.data);
  };

  const handleClick = (index: number) => {
    setTab(index);
  };

  const list = [
    {
      id: 'a21c92e8-e4b2-4048-ad82-b37f98acd961',
      name: 'Dakota Harvey',
      username: 'Adrienne_Yost',
      avater: 'https://cdn.fakercloud.com/avatars/angelcreative_128.jpg',
      isFollowing: true,
    },
    {
      id: '8a204d62-0516-442f-a493-d99fc19f09d1',
      name: 'Pierce Berge',
      username: 'Joanny2',
      avater: 'https://cdn.fakercloud.com/avatars/nellleo_128.jpg',
      isFollowing: true,
    },
    {
      id: 'b4329ef7-f4a0-4dfb-b619-3865a7da2eda',
      name: 'Rashad Trantow',
      username: 'Lillian53',
      avater: 'https://cdn.fakercloud.com/avatars/imsoper_128.jpg',
      isFollowing: false,
    },
    {
      id: 'b4aadb9b-5205-42a0-9e40-7650f0f1e133',
      name: 'Owen Schultz',
      username: 'Sister.Rempel54',
      avater: 'https://cdn.fakercloud.com/avatars/mvdheuvel_128.jpg',
      isFollowing: true,
    },
    {
      id: 'ce64bdc6-3327-4965-a691-08dfce6e76b6',
      name: 'Raleigh Schmitt',
      username: 'Berta_Terry63',
      avater: 'https://cdn.fakercloud.com/avatars/josecarlospsh_128.jpg',
      isFollowing: false,
    },
    {
      id: '7270bb90-d6e8-42fe-bdb9-0e7ba25fc7c4',
      name: 'Arch Gleichner',
      username: 'Delphine.Rau69',
      avater: 'https://cdn.fakercloud.com/avatars/stefanotirloni_128.jpg',
      isFollowing: true,
    },
    {
      id: '1dfd59df-50b6-4b8a-bee8-d440b63bddc7',
      name: 'Lonie Ferry',
      username: 'Forrest94',
      avater: 'https://cdn.fakercloud.com/avatars/vanchesz_128.jpg',
      isFollowing: true,
    },
    {
      id: 'fa973ad9-ec20-41b0-bd9b-d5385d27bfea',
      name: 'Vella Kozey',
      username: 'Justina.Tillman',
      avater: 'https://cdn.fakercloud.com/avatars/xiel_128.jpg',
      isFollowing: false,
    },
    {
      id: '7e3f55d0-67bf-4cbd-8538-d3b9566e1d0e',
      name: 'Viola Schamberger',
      username: 'Callie_Dietrich76',
      avater: 'https://cdn.fakercloud.com/avatars/renbyrd_128.jpg',
      isFollowing: false,
    },
    {
      id: '8e690bd4-cbc0-4a6e-b798-aeaeff14ddcc',
      name: 'Juliana Koelpin',
      username: 'Kaelyn.Hane',
      avater: 'https://cdn.fakercloud.com/avatars/craighenneberry_128.jpg',
      isFollowing: false,
    },
    // {
    //   id: 'a21c92e8-e4b2-4048-ad82-b37f98acd961g',
    //   name: 'Dakota Harvey',
    //   username: 'Adrienne_Yost',
    //   avater: 'https://cdn.fakercloud.com/avatars/angelcreative_128.jpg',
    //   isFollowing: true,
    // },
    // {
    //   id: '8a204d62-0516-442f-a493-d99fc19f09d1f',
    //   name: 'Pierce Berge',
    //   username: 'Joanny2',
    //   avater: 'https://cdn.fakercloud.com/avatars/nellleo_128.jpg',
    //   isFollowing: true,
    // },
    // {
    //   id: 'b4329ef7-f4a0-4dfb-b619-3865a7da2edad',
    //   name: 'Rashad Trantow',
    //   username: 'Lillian53',
    //   avater: 'https://cdn.fakercloud.com/avatars/imsoper_128.jpg',
    //   isFollowing: false,
    // },
    // {
    //   id: 'b4aadb9b-5205-42a0-9e40-7650f0f1e133s',
    //   name: 'Owen Schultz',
    //   username: 'Sister.Rempel54',
    //   avater: 'https://cdn.fakercloud.com/avatars/mvdheuvel_128.jpg',
    //   isFollowing: true,
    // },
    // {
    //   id: 'ce64bdc6-3327-4965-a691-08dfce6e76b6q',
    //   name: 'Raleigh Schmitt',
    //   username: 'Berta_Terry63',
    //   avater: 'https://cdn.fakercloud.com/avatars/josecarlospsh_128.jpg',
    //   isFollowing: false,
    // },
  ];

  return (
    <FollowWrapper>
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
        {userList.map((member) => (
          <Follower
            key={member.id}
            name={member.name}
            username={member.username}
            isFollowing={member.isFollowing}
          />
        ))}
      </ListWrapper>
    </FollowWrapper>
  );
};

export default Follow;
