import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '../../../store/store.context';
import { IBaseStepType } from '../utils';
import YesOrNo from '../../../components/YesOrNo/YesOrNo';

const IsDegreeInChina: React.FC<IBaseStepType> = ({
  callback,
}) => {
  const store = useContext(StoreContext);

  const onClick = (value: boolean) => () => {
    store.addStepsAfterDegreeInChina(value);
    store.update('isDegreeGetInChina', value);
    callback();
  };

  return (
    <YesOrNo
      yesText="是"
      noText="不是"
      value={store.isDegreeGetInChina}
      onClick={onClick}
    />
  );
};

export default observer(IsDegreeInChina);
