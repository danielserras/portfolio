import * as React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { ThemeProvider, Toolbar } from '@mui/material';
import { createTheme } from '@mui/material';
import {CssBaseline} from '@mui/material';
import { useSelector } from 'react-redux';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

function App() {
  
  const colorMode = useSelector((state) => state.colorMode.colorMode);


  const theme = createTheme({
    palette: {
      mode: colorMode,
      primary: {
        main: '#004d40'
      },
      secondary: {
        main: '#ffd54f',
      },
    },
  });


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <header className="App-header">
          <NavBar theme={theme}></NavBar>
        </header>
        <main>
        <Routes>
          <Route path="/" element={<Content></Content>} />
        </Routes>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
