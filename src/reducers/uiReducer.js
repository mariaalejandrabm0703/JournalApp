import types from '../types/types'

const initialState = {
    loading: false,
    messageError: ''
}

export const uiReducer = ( state = initialState, action) =>{
switch (action.type) {
    case types.uiSetError:
        
        break;
    
    case types.uiRemoveError:

        break;

    default:
        break;
}
}