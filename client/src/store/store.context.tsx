import React, { createContext } from 'react';
import { ChatStore } from './ChatScreenStore/ChatScreenStore';
import { RegStore } from './RegStore';
import { AdminStore } from './AdminStore';

// Prepare the store
const chatStore = new ChatStore();
const regStore = new RegStore();
const adminStore = new AdminStore();

const store = {
  chatStore,
  regStore,
  adminStore,
};

// Prepare Context
export const StoreContext = createContext<typeof store>(store);

// Prepare Context Provider
const StoreContextProvider = ({
  children,
}: {
  children: React.ReactElement<any>;
}) => <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;

export default StoreContextProvider;
