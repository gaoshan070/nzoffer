import React, { createContext } from 'react';
import ChatScreenStore from './ChatScreenStore';

export const chatScreenStore = new ChatScreenStore();

export type ChatScreenStoreType = typeof chatScreenStore;

export const ChatScreenStoreContext = createContext<
  ChatScreenStoreType
>(chatScreenStore);

const ChatScreenStoreContextProvider = ({
  children,
}: {
  children: React.ReactElement<any>;
}) => (
  <ChatScreenStoreContext.Provider
    value={chatScreenStore}
  >
    {children}
  </ChatScreenStoreContext.Provider>
);

export default ChatScreenStoreContextProvider;
