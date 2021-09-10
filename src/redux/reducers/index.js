import { SIGNUP_USER, LOGIN_USER, ADD_MONEY, GET_NEW_DATE} from "../actions/types";

const userReducer = (state, action) => {
    switch (action.type) {
        case SIGNUP_USER:
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
            const data = action.payload;
            let account = state.users.find(elem => elem.email === data.email); //guardo objeto con datos de 1 usuario
            const position = state.users.indexOf(account);  //busco la posición en la que se encuentra de toda la lista
            const idTransaction = 1 //getNewID();   //me devuelve un ID, e incrementa el valor para siguiente llamada
            const dateTransaction = userReducer(state, {type:"GET_NEW_DATE"});   //devuelve fecha
            const newTransaction = {    //genero nuevo objeto transacción de tipo depósito
                type: "deposit",
                id_transaction: parseInt(idTransaction),
                beneficiaryEmail: data.email,
                beneficiaryName: account.name,
                amount: parseInt(data.amount),
                balance: parseInt(account.money) + parseInt(data.amount),
                date: dateTransaction,
            };
            console.log(newTransaction, typeof data.amonut, typeof account.money);
            console.log(account);
            account.money = parseInt(account.money) + parseInt(data.amount);
            account.transactions.push(newTransaction);  //meto última transacción en la lista de transacciones
            const newState = state.users;
            newState[position] = account; //introduzco el objeto modificado con la ultima transacción del usuario
            localStorage.setItem("data",JSON.stringify(newState)); //guardo en localstorage una copia del estado
            return {
                ...state,
                users: newState,
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