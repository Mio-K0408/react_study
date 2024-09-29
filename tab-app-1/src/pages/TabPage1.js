import React from 'react';
import { Container } from '@mui/material';
import CustomTabs from '../components/Tab';

// タブのデータを配列で定義
const tabData = [
    { label: 'Item One', content: 'This is content for Item One' },
    { label: 'Item Two', content: 'This is content for Item Two' },
    { label: 'Item Three', content: 'This is content for Item Three' },
  ];

const TabPage1 = () => (
    <Container sx={{marginLeft:0}}>
      <CustomTabs tabs={tabData} />      
    </Container>
  );

export default TabPage1;
