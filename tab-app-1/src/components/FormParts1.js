// components/FormParts1.js
import React from 'react';
import { TextField } from '@mui/material';

export const TextFieldParts = ({ formData, onChange }) => {
  return (
    <>
      <TextField
        label="姓"
        name="lastName"
        value={formData.lastName}
        onChange={onChange}
        fullWidth
        required
      />
      <TextField
        label="名"
        name="firstName"
        value={formData.firstName}
        onChange={onChange}
        fullWidth
        required
        sx={{ mt: 2 }}
      />
    </>
  );
};
