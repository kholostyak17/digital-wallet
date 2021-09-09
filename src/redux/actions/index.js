import { SIGNUP_USER, LOGIN_USER } from "./types"

export const signUpUserAction = user => ({
    type: SIGNUP_USER,
    payload: user,
});
export const loginUserAction = credentials => ({
    type: LOGIN_USER,
    payload: credentials,
});