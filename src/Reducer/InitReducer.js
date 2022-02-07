import { actions } from "./ActionConstants";

const initialState = {
    init: "",
};


export const initReducer = (state = initialState, action) => {

    switch (action.type) {
        case actions.SET_INIT:
            return{
                ...state,
                init: action.value
            }
        default :
            return {
                ...state,
            }
    }
}