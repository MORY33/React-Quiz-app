
import { Routes, Route } from 'react-router-dom';

import Settings from "./pages/Settings";
import Questions from "./pages/Questions";
import FinalScreen from './pages/FinalScreen';
import { Container, Box } from '@mui/system';
import { Typography } from '@mui/material';


function App() {
  return (
    
    <div className='App'>
        <Container maxWidth="sm">
          <Box textAlign="center" mt={5}>
          <Typography variant="h2" fontWeight="bold">Quiz app</Typography>

            <Routes>
              <Route path='/' element = {<Settings/>}/>
              <Route path='/questions' element = {<Questions/>}/>
              <Route path='/score' element = {<FinalScreen />}/>
            </Routes> 
       
          </Box>
        </Container>
      
    </div>
  );
}

export default App;