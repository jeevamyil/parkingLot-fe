import { actions } from "./ActionConstants";

const initialState = {
    findmsg: "",
};


export const FindReducer = (state = initialState, action) => {

    switch (action.type) {
       case actions.SET_FIND:
           return{
               ...state,
               findmsg: action.value
           }
           case actions.RESET_FIND:
           return{
               ...state,
               findmsg: undefined
           }
        default :
            return {
                ...state,
            }
    }
}