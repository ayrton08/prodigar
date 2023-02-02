import { FC, useReducer, ReactNode } from 'react';
import { ItemsContext, itemsReducer } from './';

export interface ItemsState {
  picture: string;
}

const ITEMS_INITIAL_STATE: ItemsState = {
  picture: '',
};

export const ItemsProvider: FC<any> = ({ children }) => {
  const [state, dispatch] = useReducer(itemsReducer, ITEMS_INITIAL_STATE);

  const savePicture = (url: string) => {
    dispatch({
      type: '[Items] - Set Picture',
      payload: url,
    });
  };

  return (
    <ItemsContext.Provider
      value={{
        ...state,
        savePicture,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
