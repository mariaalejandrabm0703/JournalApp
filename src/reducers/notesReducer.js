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
            return{
                ...state,
                active:{
                    ...action.payload
                }
            }

    
        default:
            return state;
    }

};
