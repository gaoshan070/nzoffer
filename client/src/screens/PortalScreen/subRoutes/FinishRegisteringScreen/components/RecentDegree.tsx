import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import GeneralDropDown from '../../../../../components/DropDown/GeneralDropDown';

const chinaDegreeData = [
  '大三在读',
  '大四毕业',
  '本科毕业 / 有学位',
  '本科毕业 / 无学位',
];

const RecentDegreeDropDown: React.FC = () => {
  const [text, setText] = useState('请选择最近的学历');

  return (
    <GeneralDropDown
      text={text}
      items={chinaDegreeData}
      setText={setText}
      callback={(x: unknown) => x}
      notScrollInToView
    />
  );
};

export default observer(RecentDegreeDropDown);
