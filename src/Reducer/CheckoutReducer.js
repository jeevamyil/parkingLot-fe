import { actions } from "./ActionConstants";

const initialState = {
    checkoutmsg: "",
};


export const CheckoutReducer = (state = initialState, action) => {

    switch (action.type) {
       case actions.SET_CHKOUT:
           return{
               ...state,
               checkoutmsg: action.value
           }
           case actions.RESET_CHKOUT:
           return{
               ...state,
               checkoutmsg: undefined
           }
        default :
            return {
                ...state,
            }
    }
}