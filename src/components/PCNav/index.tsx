import {FC} from 'react';
import Logo from '@/components/Logo';
import {PCNavWrapper} from './style';

const MobileHeader: FC = () => {
  return (
    <PCNavWrapper>
      <Logo />
      <div>Tab1</div>
      <div>Tab2</div>
    </PCNavWrapper>
  );
};

export default MobileHeader;
