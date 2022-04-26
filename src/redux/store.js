import { createStore } from 'redux';
import reducer from "./reducers";
import { initialData } from "./init-data";

const initialState = {
    //recojo copia de datos desde el localstorage para prevenir perdida de datos en caso de cierre o recarga
    users: (
        localStorage.getItem("data")
            ? JSON.parse(localStorage.getItem("data"))
            : initialData
    )
}

export const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);