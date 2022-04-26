import { SIGNUP_USER, ADD_MONEY, MAKE_TRANSFER, GET_NEW_DATE } from "../actions/types";

const userReducer = (state, action) => {
    switch (action.type) {
        
        case SIGNUP_USER:
            localStorage.setItem("data", JSON.stringify([...state.users, action.payload])) //guardo copia en localstorage
            return {
                ...state,
                users: [...state.users, action.payload]
            };

        case ADD_MONEY:
            const addData = action.payload;
            let account = state.users.find(elem => elem.email === addData.email); //guardo objeto con datos de 1 usuario
            const position = state.users.indexOf(account);  //busco la posición en la que se encuentra de toda la lista
            const newTransaction = {    //genero nuevo objeto transacción de tipo depósito
                type: "deposit",
                beneficiaryEmail: addData.email,
                beneficiaryName: account.name,
                amount: parseInt(addData.amount),
                balance: parseInt(account.money) + parseInt(addData.amount),
                date: userReducer(state, { type: GET_NEW_DATE }),   //devuelve fecha,
            };
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
            const transfData = action.payload;
            let senderAccount = state.users.find(elem => elem.email === transfData.senderEmail);
            const senderPosition = state.users.indexOf(senderAccount);
            let receptorAccount = state.users.find(elem => elem.email === transfData.receptorEmail);
            const receptorPosition = state.users.indexOf(receptorAccount);
             //genero nuevos objetos transacción de tipo transferencia para sender y receptor
            const newTransactionSender = {
                type: "transference",
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
                senderEmail: transfData.senderEmail,
                senderName: senderAccount.name,
                receptorEmail: transfData.receptorEmail,
                receptorName: receptorAccount.name,
                amount: parseInt(transfData.amount),
                balance: parseInt(receptorAccount.money) + parseInt(transfData.amount),
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
            const date = new Date();
            const addZeroToOneDigitValues = (value) => {  //añade ceros para mantener elementos de fecha con dos digitos
                if (value.toString().length===1){
                    return value.padStart(2, "0");
                }
                else{
                    return value;
                }
            };
            const day = addZeroToOneDigitValues(date.getDate().toString());
            const month = addZeroToOneDigitValues((date.getMonth()+1).toString());
            const year = date.getFullYear().toString();
            const hour = addZeroToOneDigitValues(date.getHours().toString());
            const minute = addZeroToOneDigitValues(date.getMinutes().toString());
            const dateString = day.concat("/", month, "/", year, " ", hour, ":", minute);
            return (dateString);

        default:
            return state;
    }
};

export default userReducer;


//TODO: ADD ID TO ALL TRANSACTIONS
//global functions
// const getNewID = () => {
//     const id = store.id;
//     store.id++;
//     return (id);
// };
