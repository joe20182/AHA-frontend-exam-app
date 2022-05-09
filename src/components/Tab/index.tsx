import {FC} from 'react';
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {TabWrapper, TabName} from './style';

interface TabProps {
  active?: boolean;
  name: string;
}

const Tab: FC<TabProps> = ({active, name}) => {
  const theme = useTheme();
  const isPC = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <TabWrapper>
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.34146 0.00012207C5.51304 0.00012207 4.84146 0.671695
          4.84146 1.50012C4.84146 2.32855 5.51304 3.00012 6.34146
          3.00012H16.7578V12.4235C16.7578 13.2519 17.4294 13.9235
          18.2578 13.9235C19.0863 13.9235 19.7578 13.2519 19.7578
          12.4235V2.50012C19.7578 1.11941 18.6386 0.00012207 17.2578
          0.00012207H6.34146ZM1 4.91476H14.122C14.6742 4.91476 15.122
          5.36247 15.122 5.91476V19.0367C15.122 19.589 14.6742 20.0367
          14.122 20.0367H1C0.447715 20.0367 0 19.589 0 19.0367V5.91476C0
          5.36247 0.447715 4.91476 1 4.91476Z"
          fill={active ? '#FFF' : '#6A6A6A'}
        />
      </svg>
      {isPC && <TabName className={active ? 'active' : ''}>{name}</TabName>}
    </TabWrapper>
  );
};

export default Tab;