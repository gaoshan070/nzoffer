import React, { useContext, createContext } from 'react';
import { ChatStore } from './ChatScreenStore/ChatScreenStore';
import { RegStore } from './RegStore';
import { AdminStore } from './AdminStore';
import { createBrowserHistory as createHistory } from 'history';

export const history = createHistory();

// Prepare the store
const chatStore = new ChatStore();
const regStore = new RegStore();
const adminStore = new AdminStore();

const store = {
  chatStore,
  regStore,
  adminStore,
  history,
};

// Prepare Context
export const StoreContext = createContext<typeof store>(store);

export function useAdminStore() {
  return useContext(StoreContext).adminStore;
}

export function useRegStore() {
  return useContext(StoreContext).regStore;
}

export function useChatStore() {
  return useContext(StoreContext).chatStore;
}

// Prepare Context Provider
const StoreContextProvider = ({
  children,
}: {
  children: React.ReactElement<any>;
}) => <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;

export default StoreContextProvider;
