// Tab.js
import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

// 汎用的なTabコンポーネント
const CustomTabs = ({ tabs }) => {
  // タブの選択状態を管理するステート
  const [value, setValue] = React.useState('0');

  // タブの選択変更ハンドラ
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ typography: 'body1' }}>
      {/* TabContextは現在選択中のタブを管理するコンテキスト */}
      <TabContext value={value}>
        {/* タブのリスト部分 */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList  onChange={handleChange} aria-label="customizable tabs" 
            TabIndicatorProps={{
                style: {
                    backgroundColor: '#263238', // タブ選択時の下の線の色を変更、直接色指定する場合はこの書き方をする
                },
            }}>
            {/* 配列のタブ情報をもとにTabを生成 */}
            {tabs.map((tab, index) => (
              <Tab key={index} label={tab.label} value={index.toString()} />
            ))}
          </TabList>
        </Box>
        {/* タブに対応するコンテンツ部分 */}
        {tabs.map((tab, index) => (
          <TabPanel key={index} value={index.toString()}>
            {tab.content}
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
};

// このコンポーネントを他のファイルでも使えるようにエクスポート
export default CustomTabs;
