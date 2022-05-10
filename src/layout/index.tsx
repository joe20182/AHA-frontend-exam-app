import {FC} from 'react';
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MobileHeader from '@/components/MobileHeader';
import MobileNav from '@/components/MobileNav';
import PCNav from '@/components/PCNav';
import Follow from '@/components/Follow';
import {LayoutWrapper, ContentWrapper} from './style';

const Layout: FC = ({children}) => {
  const theme = useTheme();
  const isPC = useMediaQuery(theme.breakpoints.up('sm'));
  const showFollowers = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <LayoutWrapper>
      {isPC || <MobileHeader />}
      {isPC && <PCNav />}
      <ContentWrapper>{children}</ContentWrapper>
      {isPC || <MobileNav />}
      {showFollowers && <Follow />}
    </LayoutWrapper>
  );
};

export default Layout;
