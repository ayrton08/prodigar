import { ItemsState } from './';

type PictureType = {
  type: '[Items] - Set Picture';
  payload: string;
};

export const itemsReducer = (
  state: ItemsState,
  action: PictureType
): ItemsState => {
  switch (action.type) {
    case '[Items] - Set Picture':
      return {
        ...state,
        picture: action.payload,
      };

    default:
      return state;
  }
};
