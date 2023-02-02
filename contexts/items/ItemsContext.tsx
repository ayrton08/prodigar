import { createContext } from 'react';

export interface IContextProps {
  picture?: string;
  location?: Location;

  savePicture: (picture: string) => void;
}

export const ItemsContext = createContext({} as IContextProps);
