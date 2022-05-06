import {FC} from 'react';
import {RouteComponentProps} from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@/ui/Button';

const MUIDemo: FC<RouteComponentProps> = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{my: 4}}>
        <Typography variant="h4" component="h1" gutterBottom>
          Test hahaha
        </Typography>
      </Box>
      <Button size="small">normal button</Button>
      <Button variant="outlined" size="medium" sx={{margin: '10px 10px'}}>
        outlined button
      </Button>
      <Button variant="contained" size="large">
        contained button
      </Button>
    </Container>
  );
};

export default MUIDemo;
