import { useRoutes } from 'react-router-dom';
import router from 'src/router';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import { CssBaseline } from '@mui/material';
import ThemeProvider from './theme/ThemeProvider';
import { useState } from 'react';
import { AppRoutes } from './routes/AppRoutes';


function App() {
  const content = useRoutes(router);
  
  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CssBaseline />
        {/* {content} */}
        <AppRoutes/>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
export default App;
