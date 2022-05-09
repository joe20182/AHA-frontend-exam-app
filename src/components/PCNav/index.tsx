import {FC} from 'react';
import Logo from '@/components/Logo';
import {PCNavWrapper, Tabs} from './style';
import Tab from '@/components/Tab';

const MobileHeader: FC = () => {
  return (
    <PCNavWrapper>
      <Logo />
      <Tabs>
        <Tab active={true} name="Home" />
        <Tab active={false} name="Tags" />
      </Tabs>
    </PCNavWrapper>
  );
};

export default MobileHeader;
