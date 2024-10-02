// pages/MenuPage.js
import React from 'react';
import { Container, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const MenuPage = () => (
  <Container sx={{marginLeft:0}}>
    <Box sx={{mt:2}}>
      <Button component={Link} to="/tagpage1" variant="contained" color="primary" sx={{ m: 1 }}>
        タブ確認
      </Button>      
      <Button component={Link} to="/inputdialogpage1" variant="contained" color="primary" sx={{ m: 1 }}>
        フォームダイアログ
      </Button>
      <Button component={Link} to="/formpage1" variant="contained" color="primary" sx={{ m: 1 }}>
        フォーム
      </Button>
      <Button component={Link} to="/dndpage1" variant="contained" color="primary" sx={{ m: 1 }}>
        DNS
      </Button>
    </Box>
  </Container>
);

export default MenuPage;
