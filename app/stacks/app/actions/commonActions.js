import {TYPES} from '../../../const/types';

export const addNote = item => {
  return {
    type: TYPES.HOME.ADD_NOTES,
    payload: item,
  };
};

export const checkValidityForInput = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 1000);
  });
};
