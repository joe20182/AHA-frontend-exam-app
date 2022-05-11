import {FC} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import Logo from '@/components/Logo';
import {PCNavWrapper, Tabs} from './style';
import Tab from '@/components/Tab';

const MobileHeader: FC = () => {
  const location = useLocation();
  const history = useHistory();

  const handleDirect = (path: string) => {
    history.push(path);
  };

  return (
    <PCNavWrapper>
      <Logo />
      <Tabs>
        <Tab
          active={location.pathname === '/' || location.pathname === '/result'}
          name="Home"
          onClick={() => handleDirect('/')}
        />
        <Tab
          active={location.pathname === '/tags'}
          name="Tags"
          onClick={() => handleDirect('/tags')}
          notice={location.pathname === '/' || location.pathname === '/result'}
        />
      </Tabs>
    </PCNavWrapper>
  );
};

export default MobileHeader;
