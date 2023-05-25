import { createContext, useState ,ReactNode, Dispatch, SetStateAction, useReducer} from "react";
import {storeType,webType} from '@/types/type';
  export type stateType = {
    webDetails: webType|undefined,
    storeDetails: storeType|undefined
  }
  export type storeContextType = {
    state:stateType,
    dispatch: Dispatch<SetStateAction<any>>;
  }

  export const StoreContext = createContext<storeContextType|undefined>(undefined); 

  export const ACTION_TYPES = {
    SET_WEB: "SET_WEB",
    SET_STORE: "SET_STORE",
  };
  const storeReducer = (state:any, action:any) => {
    switch (action.type) {
      case ACTION_TYPES.SET_WEB: {
        return { ...state, webDetails: action.payload.webDetails };
      }
      case ACTION_TYPES.SET_STORE: {
        return { ...state, storeDetails: action.payload.storeDetails };
      }
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  };
  type contextProps = {
    children: ReactNode
  }
const ContextProvider=({ children }:contextProps)=>{
  const initialState={};
  
  const [state, dispatch] = useReducer(storeReducer, initialState);
    return (
      <StoreContext.Provider value={{ state, dispatch }}>
        {children}
      </StoreContext.Provider>
    );
  }
  export default ContextProvider;
