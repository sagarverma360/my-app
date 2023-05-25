import { pageType, storeType } from "@/types/type";
import Link from "next/link";
import * as layouts from "../layouts";
import { StoreContext, storeContextType } from "@/context/context";
import { useContext } from "react";

type DemoHomeDesgin1Props = {
  layout?:string|undefined,
  page?:pageType,
  coffeeStores?:storeType[]
}
export default function DemoHomeDesgin2({layout,page}:DemoHomeDesgin1Props) {
  const { state,dispatch } = useContext(StoreContext) as storeContextType;
  const {webDetails,storeDetails}=state;
  
  
  if (typeof layouts["WebLayout"] !== "undefined") {
    
    const dataProvider=((layout==="SubWeb"))?storeDetails||webDetails:webDetails;
    const Layout=layouts["WebLayout"];
    return(

      <Layout page={page} isSubWeb={(layout==="SubWeb")}>
            <>
              <h1 className={`mb-3 text-2xl font-semibold`}>Welcome to {page?.title}</h1>
              
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{dataProvider?.address}</p>
            </>       
      </Layout>
    );
      
  }else{
    return <div>DemoHomeDesgin1 WebLayout Not Found...</div>;
  }
}



