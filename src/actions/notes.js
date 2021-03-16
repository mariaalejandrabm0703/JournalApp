import { db } from "../firebase/firebase-config";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;

    const newNote = {
      tittle: "nuevo",
      body: "nuevo body",
      date: new Date().getTime(),
    };
    // metodo add devuelve una promesa y resuelve el document reference
    const docRef = await db.collection(`${uid}/journal/notes`).add(newNote);
    dispatch(activeNote(docRef.id, newNote));
  };
};

export const activeNote = (id, note) => ({
  type: types.notesActiveEntry,
  payload: {
    id,
    ...note,
  },
});

export const startLoadingNotes = (uid) => {
    return async (dispatch) =>{
        // se obtienen los datos de las notas
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
};

export const setNotes = (notes) => ({
  type: types.notesLoadEntrys,
  payload: notes,
});
