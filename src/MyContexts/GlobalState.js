
import React, { createContext, useReducer } from 'react';
import AppReducer from "./AppReducer";


    //This is our initial state of transactions which gets altered whenever new transaction is made
const initialState = {
    transactions: []
}


    //Creating a context that gives the updates transactions array of objects
export const GlobalContext = createContext(initialState);



    //Creating the Provider that will wrap all the components inside it
const GlobalProvider = (props) => {

    let [state, dispatch] = useReducer(AppReducer, initialState);

    const delTransaction = (id) => {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        });
    }

    const addTransaction = (transaction) => {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        });
    }

    return (

        <GlobalContext.Provider value={{
            transactions: state.transactions,
            delTransaction,
            addTransaction
        }}>
            { props.children }
        </GlobalContext.Provider>

    );
}


export default GlobalProvider;

