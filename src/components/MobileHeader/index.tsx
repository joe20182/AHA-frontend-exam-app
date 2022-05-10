import {FC, useEffect, useState} from 'react';
import {useLocation, useHistory} from 'react-router-dom';
import {matchRoutes} from 'react-router-config';
import Logo from '@/components/Logo';
import BackImg from '@/assets/img/back.png';
import {MobileHeaderWrapper, HeaderGuard, BackIcon} from './style';
import routesConfig from '@/router';

const MobileHeader: FC = () => {
  const location = useLocation();
  const history = useHistory();
  const [isAtHome, setIsAtHome] = useState(true);

  useEffect(() => {
    const homeRoute = matchRoutes(routesConfig, '/')[0].route;
    const atHome = homeRoute.path === location.pathname;
    setIsAtHome(atHome);
    // console.log(123, homeRoute, atHome);
  }, [location]);

  const handleBackHome = () => {
    history.push('/');
  };

  return (
    <MobileHeaderWrapper>
      {isAtHome && <Logo />}
      {isAtHome || (
        <>
          <BackIcon src={BackImg} onClick={handleBackHome} />
          <HeaderGuard>Home Page</HeaderGuard>
        </>
      )}
    </MobileHeaderWrapper>
  );
};

export default MobileHeader;
