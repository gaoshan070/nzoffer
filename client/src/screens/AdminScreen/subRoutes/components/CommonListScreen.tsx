import React from 'react';
import { KeyName } from '../../../../store/AdminStore';
import {
  useComponentDidMount,
  useHistory,
} from '../../../../miscellaneous/hooks';
import { useAdminStore } from '../../../../store/store.context';
import { AdminScreen } from './AdminScreen';
import { ActionButton } from './ActionButton';
import { RenderList } from './RenderList';
import { observer } from 'mobx-react-lite';

export const CommonListScreen: React.FC<{
  title: string;
  renderItem: (item: any, index: number) => React.ReactElement;
  feathersService: object;
  dataKeyName: KeyName;
  routeForNew: string;
}> = observer(
  ({ title, renderItem, feathersService, dataKeyName, routeForNew }) => {
    const history = useHistory();
    const adminStore = useAdminStore();

    useComponentDidMount(async () => {
      // start doing the async request here.
      // @ts-ignore
      const result = await feathersService.find();
      adminStore.update(dataKeyName, result.data);
    });

    return (
      <AdminScreen
        title={title}
        actionButtons={
          <ActionButton onClick={() => history.push(routeForNew)}>
            新建
          </ActionButton>
        }
      >
        <RenderList
          // @ts-ignore
          data={adminStore[dataKeyName]}
          renderItem={renderItem}
        />
      </AdminScreen>
    );
  },
);
