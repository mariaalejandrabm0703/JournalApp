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
        
    
        default:
            return state;
    }

};
