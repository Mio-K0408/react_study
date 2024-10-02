// pages/InputDialogPage1.js
import React from 'react';
import { Container, Button, Box } from '@mui/material';
import CustomDialog from '../components/Dialog'; // 切り分けたダイアログコンポーネントをインポート

const InputDialogPage1 = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container sx={{ marginLeft: 0 }}>
      <Box sx={{ typography: 'body1', m: 5 }}>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          ダイアログ表示1
        </Button>
        {/* 切り分けたダイアログコンポーネントを使用 */}
        <CustomDialog open={open} handleClose={handleClose} />
      </Box>
    </Container>
  );
};

export default InputDialogPage1;
