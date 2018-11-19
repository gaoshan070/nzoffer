import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { ChatScreenStoreContext } from '../../../../store/ChatScreenStore.context';
import { IBaseStepType } from '../../utils';
import YesOrNo from './components/YesOrNo/YesOrNo';

const DegreeInChina: React.FC<IBaseStepType> = ({
  callback,
}) => {
  const {
    isDegreeGetInChina,
    setIsDegreeGetInChina,
  } = useContext(ChatScreenStoreContext);

  const onClick = (value: boolean) => () => {
    setIsDegreeGetInChina(value);
    callback();
  };

  return (
    <YesOrNo
      value={isDegreeGetInChina}
      onClick={onClick}
    />
  );
};

export default observer(DegreeInChina);
