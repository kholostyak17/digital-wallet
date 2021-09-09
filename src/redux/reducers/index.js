import { SIGNUP_USER, LOGIN_USER } from "../actions/types";

const userReducer = (state, action) => {
    switch (action.type) {
        case SIGNUP_USER:
            return {
                ...state,
                users: {...state.users, action.payload}
            };
        case LOGIN_USER:
            return {
                ...state,
                users: state.users.filter(email => email)
            };
        default:
            return state;
    }
};

export default userReducer;