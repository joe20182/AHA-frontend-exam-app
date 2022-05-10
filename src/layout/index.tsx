import {FC} from 'react';
import {useLocation} from 'react-router-dom';
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MobileHeader from '@/components/MobileHeader';
import MobileNav from '@/components/MobileNav';
import PCNav from '@/components/PCNav';
import Follow from '@/components/Follow';
import {LayoutWrapper, ContentWrapper} from './style';

const Layout: FC = ({children}) => {
  const location = useLocation();
  const theme = useTheme();
  const isPC = useMediaQuery(theme.breakpoints.up('sm'));
  const showFollowers =
    useMediaQuery(theme.breakpoints.up('lg')) && location.pathname !== '/tags';

  return (
    <LayoutWrapper>
      {isPC || <MobileHeader />}
      {isPC && <PCNav />}
      <ContentWrapper showFollowers={showFollowers}>{children}</ContentWrapper>
      {isPC || (location.pathname === '/' && <MobileNav />)}
      {showFollowers && <Follow />}
    </LayoutWrapper>
  );
};

export default Layout;
