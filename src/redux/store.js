import { createStore } from 'redux';
import reducer from "./reducers";

const initialState = {
    users: [
        {
            id:0,
            email:"default@email.com",
            password:"default",
            name: "default",
            money: 50
        },
        {
            id:1,
            email:"test@email.com",
            password:"test",
            name: "test",
            money: 50
        },
    ]
}

export const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);


// const reducers = () =>{
//     return{
//         testing: "",
//     };
// };

// export default () => {
//     return{
//         ...createStore(reducers)
//     };
// };

