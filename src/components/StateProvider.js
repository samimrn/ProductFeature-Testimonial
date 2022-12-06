import React, { createContext, useContext, useReducer } from "react";

//prepare the datalayer
export const StateContext = createContext()

//wrap our app and provide data layer
export const StateProvider = ({reducer, initialState, children , increment}) => (
    <StateContext.Provider value={useReducer(reducer, initialState, increment)}>
        {children}
    </StateContext.Provider>
);

//pull info from datalayer
export const useStateValue = () => useContext(StateContext);