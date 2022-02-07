import { actions } from "./ActionConstants";

const initialState = {
    lots: [],
};


export const LotReducer = (state = initialState, action) => {

    switch (action.type) {
        case actions.SET_LOTS:
            return {
                ...state,
                lots: action.value
            }
            case actions.RESET_LOTS:
            return {
                ...state,
                lots: undefined
            }
        default :
            return {
                ...state,
            }
    }
}