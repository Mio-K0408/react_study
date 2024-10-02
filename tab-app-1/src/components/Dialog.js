// components/Dialog.js
import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const CustomDialog = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: (event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          const name = formJson.name;
          console.log(name);
          handleClose();
        },
      }}
    >
      <DialogTitle>フォーム確認</DialogTitle>
      <DialogContent>
        {/* <DialogContentText>
          名前を入力
        </DialogContentText> */}
        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          name="name"
          label="名前"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>閉じる</Button>
        <Button type="submit">決定</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
