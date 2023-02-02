import { createContext } from 'react';

export interface IContextProps {
  picture: string;
  savePicture: (picture: string) => void;
}

export const ItemsContext = createContext({} as IContextProps);
