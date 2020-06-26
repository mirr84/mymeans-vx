import {ACTION_SETTER} from "../actions/actionConst";
import {getStorage} from "../utils/getStorage";

const initState = {

    isProgressCheck: false,
    isProgressLogout: false,
    isProgressReg: false,
    isProgressAuth: false,

    isAuth: false,

    token: '',

}

export const authReducer = (state = getStorage().getInitStorage('authReducer', initState), action) => {

    let newState = Object.assign({}, state);

    if (action.reducer === 'authReducer') {
        if (action.type === ACTION_SETTER) {
            newState = Object.assign(newState, action.payload);
        }
    }

    return newState;

}
