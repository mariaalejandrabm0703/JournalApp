import { db } from "../firebase/firebase-config";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";
import Swal from 'sweetalert2';

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;

    const newNote = {
      title: "Some awesome title",
      body: "Some awesome body",
      date: new Date().toDateString(),
    };
    // metodo add devuelve una promesa y resuelve el document reference
    const docRef = await db.collection(`${uid}/journal/notes`).add(newNote);
    dispatch(activeNote(docRef.id, newNote));
    dispatch(startLoadingNotes(uid));
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
  return async (dispatch) => {
    // se obtienen los datos de las notas
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const setNotes = (notes) => ({
  type: types.notesLoadEntrys,
  payload: notes,
});

export const startSaveNote = (note) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;

    const saveNote = { ...note };
    delete saveNote.id;

    // metodo guardar en la base de datos
    await db.doc(`/${uid}/journal/notes/${note.id}`).update(saveNote);
    // vuelve a cargar las notas
    // carga inicial solamente dispatch(startLoadingNotes(uid));
    dispatch(refresNotes(note.id, note));
    Swal.fire('Save', note.title, 'success')
  };
};

export const refresNotes = (id, note) => ({
  type: types.notesUpdateEntry,
  payload: {
    id,
    note,
  },
});
