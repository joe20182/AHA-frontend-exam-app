import {FC} from 'react';
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MobileHeader from '@/components/MobileHeader';
import PCNav from '@/components/PCNav';
import {LayoutWrapper} from './style';

const Layout: FC = () => {
  const theme = useTheme();
  const isPC = useMediaQuery(theme.breakpoints.up('sm'));
  const showFollowers = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <LayoutWrapper isPC={isPC}>
      {isPC || <MobileHeader />}
      {isPC && <PCNav />}
      {/* content */}
      {isPC || <div className="mobile-nav">MOBILE NAV</div>}
      {showFollowers && <div className="pc-followers">PC FOLLOWERS</div>}
    </LayoutWrapper>
  );
};

export default Layout;
