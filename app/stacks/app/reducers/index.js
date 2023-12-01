import { TYPES } from '../../../const/types';

const INITIAL_STATE = {
  notesList: [],
};

export const INITIAL_NOTE = {
  title: '',
  id: 1,
  description: '',
};


export const commonReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.HOME.ADD_NOTES: {
      return {
        ...state,
        notesList: [...state.notesList, action.payload],
      };
    }

    default:
      return state;
  }
};
