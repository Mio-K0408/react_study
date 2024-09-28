// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';
import Header from './components/Header';
import Footer from './components/Footer';
import MenuPage from './pages/MenuPage';
import TabPage1 from './pages/TabPage1';
import DndPage1 from './pages/DndPage1';
import InputDialogPage1 from './pages/InputDialogPage1';

const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[500]
    },
    secondary: {
      main: "#78909c"
    }
  }
});

const footerStyle = {
  bottom: 0,
};

const App = () => (
  // ルートの管理、また共通部品を全画面に反映させるための設定
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Header />
        <Routes>
          <Route path="/" element={<MenuPage />} />
          <Route path="/tagpage1" element={<TabPage1 />} />
          <Route path="/dndpage1" element={<DndPage1 />} />
          <Route path="/inputdialogpage1" element={<InputDialogPage1 />} />
        </Routes>
      <Footer style={footerStyle} />
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
