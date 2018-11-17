import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { ChatScreenStoreContext } from '../../../store/ChatScreenStore.context';
import { IBaseStepType } from '../utils';
import Switch from '../../../components/Switch/Switch';

const DegreeInChina: React.FC<IBaseStepType> = ({
  callback,
}) => {
  const {
    isDegreeGetInChina,
    setIsDegreeGetInChina,
  } = useContext(ChatScreenStoreContext);

  const onClick = (value: boolean) => {
    setIsDegreeGetInChina(value);
    callback();
  };

  return (
    <Switch
      isChecked={isDegreeGetInChina}
      setChecked={onClick}
    />
  );
};

export default observer(DegreeInChina);
