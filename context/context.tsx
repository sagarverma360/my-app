import { createContext, useState ,ReactNode, Dispatch, SetStateAction} from "react";
import {storeType} from '@/types/type';


  export type sotoreContextType = {
    sotreDetails: storeType|undefined;
    setStoreDetails: Dispatch<SetStateAction<any>>;
  };
 
    
export const Store_data = createContext<sotoreContextType|undefined>(undefined);
type contextProps = {
    children: ReactNode
  }
function Context({ children }:contextProps) {
  
const [sotreDetails, setStoreDetails] = useState<storeType>(); 
    return (
      <Store_data.Provider value={{ sotreDetails, setStoreDetails }}>
        {children}
      </Store_data.Provider>
    );
  }
  export default Context;
