import {FC} from 'react';
import {RouteComponentProps} from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@/ui/Button';
import Input from '@/ui/Input';
import PageSlider from '@/components/PageSlider';

const MUIDemo: FC<RouteComponentProps> = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{my: 4}}>
        <Typography variant="h4" component="h1" gutterBottom>
          Test hahaha
        </Typography>
      </Box>
      <Box>
        <Input placeholder="input1..." sx={{my: 2}} />
        <Input placeholder="input2..." fullWidth />
      </Box>
      <Box sx={{my: 4}}>
        <Button size="small">normal button</Button>
        <Button variant="outlined" size="medium" sx={{margin: '10px 10px'}}>
          outlined button
        </Button>
        <Button variant="contained" size="large">
          contained button
        </Button>
      </Box>
      <Box>
        <PageSlider />
      </Box>
    </Container>
  );
};

export default MUIDemo;
