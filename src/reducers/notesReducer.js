import { types } from "../types/types";

/**
 {
     notes:[],
     active: null ó { note }
 }
 */
const initialState = {
  notes: [],
  active: null,
};
//reducer funcion pura
export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.notesActiveEntry:
      return {
        ...state,
        active: {
          ...action.payload,
        },
      };
      case types.notesLoadEntrys:
        return {
          ...state,
          notes: [...action.payload],
        };
      case types.notesUpdateEntry:
        return{
          ...state,
          notes:state.notes.map(
            note=> note.id === action.payload.id
            ? action.payload.note
            : note
          )
        }
    default:
      return state;
  }
};
