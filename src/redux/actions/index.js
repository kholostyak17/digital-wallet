import { SIGNUP_USER, LOGIN_USER, ADD_MONEY, GET_NEW_DATE, MAKE_TRANSFERENCE} from "./types"

export const signUpUserAction = newAccountData => ({
    type: SIGNUP_USER,
    payload: newAccountData,
});
export const loginUserAction = credentials => ({
    type: LOGIN_USER,
    payload: credentials,
});
export const addMoneyAction = data => ({
    type: ADD_MONEY,
    payload: data,
});
export const getNewAction = () => ({
    type: GET_NEW_DATE,
    payload: undefined,
});