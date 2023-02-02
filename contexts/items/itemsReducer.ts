import { ItemsState } from './';

type ItemsType = {
  type: '[Items] - Set Picture';
  payload: string;
};

export const itemsReducer = (
  state: ItemsState,
  action: ItemsType
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
