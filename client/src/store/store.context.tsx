import React, { createContext } from 'react';
import { AppStore } from './ChatScreenStore/ChatScreenStore';

export const chatScreenStore = new AppStore();

export type ChatScreenStoreType = typeof chatScreenStore;

export const StoreContext = createContext<
  ChatScreenStoreType
>(chatScreenStore);

const ChatScreenStoreContextProvider = ({
  children,
}: {
  children: React.ReactElement<any>;
}) => (
  <StoreContext.Provider value={chatScreenStore}>
    {children}
  </StoreContext.Provider>
);

export default ChatScreenStoreContextProvider;
