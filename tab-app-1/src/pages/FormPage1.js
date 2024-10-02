// FormPage.js
import React, { useState } from 'react';
import { Container, Button, Box, Grid, Typography } from '@mui/material';
import { TextFieldParts } from '../components/FormParts1';
import { SelectRadioCheckboxParts } from '../components/FormParts2';

const FormPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    agree: false,
    year: '',
    month: '',
    day: '',
    birthDate: null, // カレンダーでの生年月日
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked,
    });
  };

  const handleDateChange = (newDate) => {
    setFormData({
      ...formData,
      birthDate: newDate,
    });
  };

  const validateForm = () => {
    if (!formData.firstName || !formData.lastName) {
      alert('名前を入力してください');
      return false;
    }
    if (!formData.gender) {
      alert('性別を選択してください');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmittedData(formData);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box sx={{ m: 2 }}>
              <TextFieldParts formData={formData} onChange={handleInputChange} />
            </Box>
            <Box sx={{ m: 2 }}>
              <SelectRadioCheckboxParts
                formData={formData}
                onChange={handleInputChange}
                onCheckboxChange={handleCheckboxChange}
                onDateChange={handleDateChange}
              />
            </Box>
            <Button type="submit" variant="contained" color="primary">
              登録
            </Button>
          </Grid>
          <Grid item xs={6}>
            {submittedData && (
              <Box>
                <Typography variant="h6">入力内容</Typography>
                <Typography>名前: {submittedData.firstName} {submittedData.lastName}</Typography>
                <Typography>生年月日 (セレクト): {submittedData.year}年 {submittedData.month}月 {submittedData.day}日</Typography>
                <Typography>生年月日 (カレンダー): {submittedData.birthDate ? submittedData.birthDate.toLocaleDateString() : '未入力'}</Typography>
                <Typography>性別: {submittedData.gender}</Typography>
                <Typography>規約に同意: {submittedData.agree ? 'はい' : 'いいえ'}</Typography>
              </Box>
            )}
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default FormPage;
