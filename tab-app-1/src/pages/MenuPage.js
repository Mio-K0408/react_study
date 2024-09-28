// pages/MenuPage.js
import React from 'react';
import { Container, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const MenuPage = () => (
  <Container>
    <Box mt={10}>
      <Button component={Link} to="/tagpage1" variant="contained" color="primary" sx={{ m: 1 }}>
        ページ1
      </Button>
      <Button component={Link} to="/dndpage1" variant="contained" color="primary" sx={{ m: 1 }}>
        ページ2
      </Button>
      <Button component={Link} to="/inputdialogpage1" variant="contained" color="primary" sx={{ m: 1 }}>
        ページ3
      </Button>
    </Box>
  </Container>
);

export default MenuPage;
