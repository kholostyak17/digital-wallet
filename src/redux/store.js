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
                    email: "kholostyak17@gmail.com",
                    password: "ivan",
                    name: "Iván Jaén Trujillo",
                    money: 380,
                    transactions: [
                        {
                            type: "deposit",
                            idTransaction: 0,
                            beneficiaryEmail: "kholostyak17@gmail.com",
                            beneficiaryName: "Iván Jaén Trujillo",
                            amount: 500,
                            balance: 500,
                        },
                        {
                            type: "transference",
                            idTransaction: 2,
                            senderEmail: "kholostyak17@gmail.com",
                            senderName: "Iván Jaén Trujillo",
                            receptorEmail: "alberto@email.com",
                            receptorName: "Alberto García",
                            amount: -120,
                            balance: 380,
                        }
                    ],
                },
                {
                    id: 1,
                    email: "alberto@email.com",
                    password: "alberto",
                    name: "Alberto García",
                    money: 620,
                    transactions: [
                        {
                            type: "deposit",
                            idTransaction: 1,
                            beneficiaryEmail: "alberto@email.com",
                            beneficiaryName: "Alberto García",
                            amount: 500,
                            balance: 500,
                        },
                        {
                            type: "transference",
                            idTransaction: 2,
                            senderEmail: "kholostyak17@gmail.com",
                            senderName: "Iván Jaén Trujillo",
                            receptorEmail: "alberto@email.com",
                            receptorName: "Alberto García",
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

