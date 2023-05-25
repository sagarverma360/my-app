import { createContext, useState ,ReactNode, Dispatch, SetStateAction} from "react";
import {webType} from '@/types/type';


  export type webContextType = {
    webDetails: webType|undefined;
    setWebDetails: Dispatch<SetStateAction<any>>;
  };
 
    
export const Web_data = createContext<webContextType|undefined>(undefined);
type contextProps = {
    children: ReactNode
  }
function WebContext({ children }:contextProps) {
  
const [webDetails, setWebDetails] = useState<webType>(); 
    return (
      <Web_data.Provider value={{ webDetails, setWebDetails }}>
        {children}
      </Web_data.Provider>
    );
  }
  export default WebContext;
