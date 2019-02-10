import React, { createContext } from 'react';
import { ChatStore } from './ChatScreenStore/ChatScreenStore';
import { RegStore } from './RegStore';

// Prepare the store
const chatStore = new ChatStore();
const regStore = new RegStore();

const store = {
  chatStore,
  regStore,
};

// Prepare Context
export const StoreContext = createContext<
  typeof store
>(store);

// Prepare Context Provider
const StoreContextProvider = ({
  children,
}: {
  children: React.ReactElement<any>;
}) => (
  <StoreContext.Provider value={store}>
    {children}
  </StoreContext.Provider>
);

export default StoreContextProvider;
