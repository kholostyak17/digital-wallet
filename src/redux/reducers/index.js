import { SIGNUP_USER, LOGIN_USER, ADD_MONEY, MAKE_TRANSFER, GET_NEW_DATE } from "../actions/types";

const userReducer = (state, action) => {
    switch (action.type) {
        case SIGNUP_USER:
            localStorage.setItem("data", JSON.stringify([...state.users, action.payload])) //guardo copia en localstorage
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        case LOGIN_USER:
            return {
                ...state,
                users: state.users
            };
        case ADD_MONEY:
            console.log(state);
            const addData = action.payload;
            let account = state.users.find(elem => elem.email === addData.email); //guardo objeto con datos de 1 usuario
            const position = state.users.indexOf(account);  //busco la posición en la que se encuentra de toda la lista
            const newTransaction = {    //genero nuevo objeto transacción de tipo depósito
                type: "deposit",
                idTransaction: parseInt(1), //getNewID();   //me devuelve un ID, e incrementa el valor para siguiente llamada
                beneficiaryEmail: addData.email,
                beneficiaryName: account.name,
                amount: parseInt(addData.amount),
                balance: parseInt(account.money) + parseInt(addData.amount),
                date: userReducer(state, { type: GET_NEW_DATE }),   //devuelve fecha,
            };
            console.log(newTransaction, typeof addData.amonut, typeof account.money);
            console.log(account);
            account.money = parseInt(account.money) + parseInt(addData.amount); //incremento dinero total
            account.transactions.push(newTransaction);  //meto última transacción en la lista de transacciones
            const newStateAdd = state.users;
            newStateAdd[position] = account; //introduzco el objeto modificado con la ultima transacción del usuario
            localStorage.setItem("data", JSON.stringify(newStateAdd)); //guardo en localstorage una copia del estado
            return {
                ...state,
                users: newStateAdd,
            };
        case MAKE_TRANSFER:
            console.log(state);
            const transfData = action.payload;
            let senderAccount = state.users.find(elem => elem.email === transfData.senderEmail);
            console.log(senderAccount);
            const senderPosition = state.users.indexOf(senderAccount);
            let receptorAccount = state.users.find(elem => elem.email === transfData.receptorEmail);
            const receptorPosition = state.users.indexOf(receptorAccount);
             //genero nuevos objetos transacción de tipo transferencia para sender y receptor
            const newTransactionSender = {
                type: "transference",
                idTransaction: parseInt(1),
                senderEmail: transfData.senderEmail,
                senderName: senderAccount.name,
                receptorEmail: transfData.receptorEmail,
                receptorName: receptorAccount.name,
                amount: -parseInt(transfData.amount),
                balance: parseInt(senderAccount.money) - parseInt(transfData.amount),
                date: userReducer(state, { type: GET_NEW_DATE }),
            };
            senderAccount.money = parseInt(senderAccount.money) - parseInt(transfData.amount); //decremento
            const newTransactionReceptor = {
                type: "transference",
                idTransaction: parseInt(1),
                senderEmail: transfData.senderEmail,
                senderName: senderAccount.name,
                receptorEmail: transfData.receptorEmail,
                receptorName: receptorAccount.name,
                amount: parseInt(transfData.amount),
                balance: parseInt(senderAccount.money) + parseInt(transfData.amount),
                date: userReducer(state, { type: GET_NEW_DATE }),
            };
            receptorAccount.money = parseInt(receptorAccount.money) + parseInt(transfData.amount); //incremento
            senderAccount.transactions.push(newTransactionSender);
            receptorAccount.transactions.push(newTransactionReceptor);
            const newStateTransf = state.users;
            newStateTransf[senderPosition] = senderAccount; 
            newStateTransf[receptorPosition] = receptorAccount;
            localStorage.setItem("data", JSON.stringify(newStateTransf)); //guardo en localstorage una copia del estado
            return {
                ...state,
                users: newStateTransf,
            };
        case GET_NEW_DATE:
            const d = new Date();
            return (d.getDate().toString().concat("/", d.getMonth().toString(), "/", d.getFullYear().toString(),
                " ", d.getHours().toString(), ":", d.getMinutes().toString()));
        default:
            return state;
    }
};

export default userReducer;


//global functions