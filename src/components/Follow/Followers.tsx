import {FC, useRef, useEffect, useCallback} from 'react';
import Follower from './Follower';
import {LoadMore} from './style';

interface User {
  avatar: string;
  id: string;
  isFollowing: boolean;
  name: string;
  username: string;
}

interface FollowersProp {
  list: User[];
  onScrollEnd: () => void;
  hasMore: boolean;
}

const Followers: FC<FollowersProp> = ({list, onScrollEnd, hasMore}) => {
  const loader = useRef(null);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      onScrollEnd();
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  return (
    <>
      {list.map((member) => (
        <Follower
          key={member.id}
          name={member.name}
          username={member.username}
          isFollowing={member.isFollowing}
        />
      ))}
      {hasMore && (
        <LoadMore ref={loader} onClick={onScrollEnd}>
          load more
        </LoadMore>
      )}
    </>
  );
};

export default Followers;
