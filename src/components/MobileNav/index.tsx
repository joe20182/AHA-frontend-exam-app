import {FC} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import {MobileNavWrapper} from './style';
import Tab from '@/components/Tab';

const MobileNav: FC = () => {
  const location = useLocation();
  const history = useHistory();

  const handleDirect = (path: string) => {
    history.push(path);
  };

  return (
    <MobileNavWrapper>
      <Tab
        name="Home"
        active={location.pathname === '/' || location.pathname === '/result'}
        onClick={() => handleDirect('/')}
      />
      <Tab
        name="Tags"
        active={location.pathname === '/tags'}
        onClick={() => handleDirect('/tags')}
      />
    </MobileNavWrapper>
  );
};

export default MobileNav;
