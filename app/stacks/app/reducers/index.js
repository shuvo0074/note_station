import { TYPES } from '../../../const/types';

const INITIAL_STATE = {
  notesList: [],
};

export const INITIAL_NOTE = {
  title: '',
  id: -1,
  description: '',
};


export const commonReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.HOME.ADD_NOTES: {
      return {
        ...state,
        notesList: [...state.notesList, { ...action.payload, id: state.notesList.length }],
      };
    }
    case TYPES.HOME.EDIT_NOTES: {
      let submittedData = action.payload
      let selectedIndex = state.notesList.findIndex(i => i.id === submittedData.id)
      let mutatedArray = [...state.notesList]
      mutatedArray[selectedIndex] = action.payload
      return {
        ...state,
        notesList: mutatedArray,
      };
    }

    default:
      return state;
  }
};
