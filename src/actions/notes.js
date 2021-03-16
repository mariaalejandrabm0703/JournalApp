import {db} from '../firebase/firebase-config'
import { types } from "../types/types";

export const startNewNote = () =>{
    return async (dispatch, getState) => {
        const uid = getState().auth.uid;
        console.log(uid)

        const newNote = {
            tittle:'nuevo',
            body:'nuevo body',
            date: new Date().getTime()
        }
        // metodo add devuelve una promesa y resuelve el document reference
        const docRef = await db.collection(`${uid}/journal/notes`).add( newNote );
        console.log(docRef);
        dispatch(activeNote(docRef.id, newNote))
    }
}

export const activeNote = (id, note) =>({
    type: types.notesActiveEntry,
    payload: {
        id,
        ...note
    }
})