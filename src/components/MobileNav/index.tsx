import {FC} from 'react';
import {MobileNavWrapper} from './style';
import Tab from '@/components/Tab';

const MobileNav: FC = () => {
  return (
    <MobileNavWrapper>
      <Tab name="Home" active={true} />
      <Tab name="Tags" />
    </MobileNavWrapper>
  );
};

export default MobileNav;
