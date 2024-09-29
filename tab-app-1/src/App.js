// App.js
import React from 'react';
import { Route, Routes, useLocation, BrowserRouter } from 'react-router-dom';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MenuPage from './pages/MenuPage';
import TabPage1 from './pages/TabPage1';
import DndPage1 from './pages/DndPage1';
import InputDialogPage1 from './pages/InputDialogPage1';

// カスタムテーマの設定
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

// フッタースタイル
const footerStyle = {
  bottom: 0,
};

// メインAppコンポーネント
const AppContent = () => {
  // 現在のパスを取得
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/tagpage1" element={<TabPage1 />} />
        <Route path="/inputdialogpage1" element={<InputDialogPage1 />} />
        <Route path="/dndpage1" element={<DndPage1 />} />        
      </Routes>

      {/* 現在のパスが "/" でない場合にのみボタンを表示 */}
      {/* HTML部分でJSを書きたいときは{}で囲む */}
      {location.pathname !== '/' && (
        <Button component={Link} to="/" variant="contained" color="primary" sx={{ m: 5 }}>
          メニューに戻る
        </Button>
      )}
      
      <Footer style={footerStyle} />
    </ThemeProvider>
  );
};

const App = () => (
  /* 
    BrowserRouterを最も外側に配置しないとuseLocationでエラーになった
    → useLocationはBrowserRouterの内側でしか使えないっぽい？
  */
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);

export default App;
