import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import DropDown from '../../../../../components/DropDown/DropDown';

const chinaDegreeData = [
  '大三在读',
  '大四毕业',
  '本科毕业/有学位',
  '本科毕业/无学位',
];

const RecentDegreeDropDown: React.FC = () => {
  const [text, setText] = useState('请选择最近学历');

  return (
    <DropDown
      toDisplay={text}
      items={chinaDegreeData}
      whenSelectItem={(item: string) => setText(item)}
      boxProps={{
        width: 1,
        maxHeight: '36px',
        minHeight: '36px',
      }}
    />
  );
};

export default observer(RecentDegreeDropDown);
