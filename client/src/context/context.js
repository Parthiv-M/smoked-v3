import React, { useReducer } from "react";
import { AuthReducer, initialState } from './reducer'; 

const SmokedStateContext = React.createContext();
const SmokedDispatchContext = React.createContext();

export function useSmokedState() {
  const context = React.useContext(SmokedStateContext);
  if (context === undefined) {
    throw new Error("useSmokedState must be used within a SmokedProvider");
  }
 
  return context;
}
 
export function useSmokedDispatch() {
  const context = React.useContext(SmokedDispatchContext);
  if (context === undefined) {
    throw new Error("useSmokedDispatch must be used within a SmokedProvider");
  }
 
  return context;
}

export const SmokedProvider = ({ children }) => {
  const [user, dispatch] = useReducer(AuthReducer, initialState);
 
  return (
    <SmokedStateContext.Provider value={user}>
      <SmokedDispatchContext.Provider value={dispatch}>
        {children}
      </SmokedDispatchContext.Provider>
    </SmokedStateContext.Provider>
  );
};