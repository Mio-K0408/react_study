// components/FormParts2.js
import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, RadioGroup, FormControlLabel, Radio, Checkbox, Box, TextField } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ja } from 'date-fns/locale'; // 日本語ロケールを使用

export const SelectRadioCheckboxParts = ({ formData, onChange, onCheckboxChange, onDateChange }) => {
  // 年、月、日のオプションを生成
  const years = Array.from(new Array(100), (val, index) => 2023 - index); // 過去100年分
  const months = Array.from(new Array(12), (val, index) => index + 1);
  const days = Array.from(new Array(31), (val, index) => index + 1);

  return (
    <>
      {/* 生年月日セレクトボックス（年、月、日） */}
      <FormControl fullWidth sx={{ mt: 2 }}>
        <InputLabel id="select-year-label">年</InputLabel>
        <Select
          labelId="select-year-label"
          name="year"
          value={formData.year || ''}
          onChange={onChange}
          label="年"
          fullWidth
        >
          {years.map((year) => (
            <MenuItem key={year} value={year}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth sx={{ mt: 2 }}>
        <InputLabel id="select-month-label">月</InputLabel>
        <Select
          labelId="select-month-label"
          name="month"
          value={formData.month || ''}
          onChange={onChange}
          label="月"
          fullWidth
        >
          {months.map((month) => (
            <MenuItem key={month} value={month}>
              {month}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth sx={{ mt: 2 }}>
        <InputLabel id="select-day-label">日</InputLabel>
        <Select
          labelId="select-day-label"
          name="day"
          value={formData.day || ''}
          onChange={onChange}
          label="日"
          fullWidth
        >
          {days.map((day) => (
            <MenuItem key={day} value={day}>
              {day}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* カレンダー形式の生年月日入力 */}
      <Box sx={{ mt: 2 }}>
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={ja}>
          <DatePicker
            label="生年月日"            
            value={formData.birthDate}
            onChange={onDateChange}
            format="yyyy/MM/dd" // YYYY/MM/DD 形式に変更
            renderInput={(params) => <TextField {...params} fullWidth />}
          />
        </LocalizationProvider>
      </Box>

      {/* ラジオボタン（横並び） */}
      <FormControl component="fieldset" sx={{ mt: 2 }}>
        <RadioGroup row name="gender" value={formData.gender} onChange={onChange}>
          <FormControlLabel value="male" control={<Radio />} label="男性" />
          <FormControlLabel value="female" control={<Radio />} label="女性" />
        </RadioGroup>
      </FormControl>

      {/* チェックボックス（ラジオボタンの下に配置） */}
      <Box sx={{ mt: 2 }}>
        <FormControlLabel
          control={<Checkbox name="agree" checked={formData.agree} onChange={onCheckboxChange} />}
          label="規約に同意します"
        />
      </Box>
    </>
  );
};
