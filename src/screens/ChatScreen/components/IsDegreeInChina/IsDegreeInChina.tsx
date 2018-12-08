import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { ChatScreenStoreContext } from '../../../../store/ChatScreenStore/ChatScreenStore.context';
import { IBaseStepType } from '../../utils';
import YesOrNo from '../../../../components/YesOrNo/YesOrNo';

const IsDegreeInChina: React.FC<IBaseStepType> = ({
  callback,
}) => {
  const {
    addStepsAfterDegreeInChina,
    isDegreeGetInChina,
    setIsDegreeGetInChina,
  } = useContext(ChatScreenStoreContext);

  const onClick = (value: boolean) => () => {
    addStepsAfterDegreeInChina(value);
    setIsDegreeGetInChina(value);
    callback();
  };

  return (
    <YesOrNo
      yesText="是"
      noText="不是"
      value={isDegreeGetInChina}
      onClick={onClick}
    />
  );
};

export default observer(IsDegreeInChina);
