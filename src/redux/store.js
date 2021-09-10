import { createStore } from 'redux';
import reducer from "./reducers";

const initialState = {
    users: (
        localStorage.getItem("data")
            ?
            JSON.parse(localStorage.getItem("data"))
            :
            [
                {
                    id: 0,
                    email: "blue@email.com",
                    password: "blue",
                    name: "blue",
                    money: 380,
                    transactions: [
                        {
                            type: "deposit",
                            id_transaction: 0,
                            beneficiaryEmail: "blue@email.com",
                            beneficiaryName: "blue",
                            amount: 500,
                            balance: 500,
                        },
                        {
                            type: "transference",
                            id_transaction: 2,
                            senderEmail: "blue@email.com",
                            senderName: "blue",
                            receptorEmail: "green@email.com",
                            receptorName: "green",
                            amount: -120,
                            balance: 380,
                        }
                    ],
                },
                {
                    id: 1,
                    email: "green@email.com",
                    password: "green",
                    name: "green",
                    money: 620,
                    transactions: [
                        {
                            type: "deposit",
                            id_transaction: 1,
                            beneficiaryEmail: "green@email.com",
                            beneficiaryName: "green",
                            amount: 500,
                            balance: 500,
                        },
                        {
                            type: "transference",
                            id_transaction: 2,
                            senderEmail: "blue@email.com",
                            senderName: "blue",
                            receptorEmail: "green@email.com",
                            receptorName: "green",
                            amount: 120,
                            balance: 620,
                        }
                    ],
                },
            ]
    )
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

