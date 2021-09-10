import { SIGNUP_USER, LOGIN_USER, ADD_MONEY, MAKE_TRANSFER, GET_NEW_DATE} from "./types"

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
export const makeTransferAction = data => ({
    type: MAKE_TRANSFER,
    payload: data,
});
export const getNewDateAction = () => ({
    type: GET_NEW_DATE,
    payload: undefined,
});