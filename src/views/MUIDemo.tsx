import {FC} from 'react';
import {RouteComponentProps} from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const MUIDemo: FC<RouteComponentProps> = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{my: 4}}>
        <Typography variant="h4" component="h1" gutterBottom>
          Test hahaha
        </Typography>
      </Box>
      <Button>button</Button>
    </Container>
  );
};

export default MUIDemo;
