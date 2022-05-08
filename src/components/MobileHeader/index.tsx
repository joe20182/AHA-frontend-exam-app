import {FC} from 'react';
import Logo from '@/components/Logo';
import {MobileHeaderWrapper} from './style';

const MobileHeader: FC = () => {
  return (
    <MobileHeaderWrapper>
      <Logo />
    </MobileHeaderWrapper>
  );
};

export default MobileHeader;
