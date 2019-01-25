import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import DropDown from '../../../../../components/DropDown/DropDown';

const chinaUniData = [
  '北京工业大学',
  '北京理工大学',
  '对外经济贸易大学',
  '北京工业大学',
  '北京理工大学',
  '北京航空航天大学',
  '北京化工大学',
];

const ChinaUniListDropDown: React.FC = () => {
  const [text, setText] = useState('请选择');

  return (
    <DropDown
      toDisplay={text}
      items={chinaUniData}
      whenSelectItem={(item: string) => setText(item)}
    />
  );
};

export default observer(ChinaUniListDropDown);
