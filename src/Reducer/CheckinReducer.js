import { actions } from "./ActionConstants";

const initialState = {
    checkinmsg: "",
};


export const CheckinReducer = (state = initialState, action) => {

    switch (action.type) {
       case actions.SET_CHKIN:
           return{
               ...state,
               checkinmsg: action.value
           }
           case actions.RESET_CHKIN:
           return {
               ...state,
               checkinmsg: undefined
           }
        default :
            return {
                ...state,
            }
    }
}