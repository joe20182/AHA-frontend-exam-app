import {FC} from 'react';
import {ListItem, AvatarBox, Account, Detail, Name} from './style';
import Button from '@/ui/Button';

interface FollowerProps {
  name: string;
  username: string;
  isFollowing: boolean;
}

const Follower: FC<FollowerProps> = ({name, username, isFollowing}) => {
  return (
    <ListItem>
      <AvatarBox />
      <Detail>
        <Name>{name}</Name>
        <Account>@{username}</Account>
      </Detail>
      <Button variant={isFollowing ? 'contained' : 'outlined'}>
        {isFollowing ? 'Following' : 'Follow'}
      </Button>
    </ListItem>
  );
};

export default Follower;
