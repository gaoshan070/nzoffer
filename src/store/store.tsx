import React, { createContext } from 'react';
import AppStore from './AppStore';

export const appStore = new AppStore();

export type AppStoreType = typeof appStore;

export const AppStoreContext = createContext<
  AppStoreType
>(appStore);

const AppStoreContextProvider = ({
  children,
}: {
  children: React.ReactElement<any>;
}) => (
  <AppStoreContext.Provider value={appStore}>
    {children}
  </AppStoreContext.Provider>
);

export default AppStoreContextProvider;
