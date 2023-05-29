
import * as Layouts from "@/themes/demo";
import { useContext, useEffect } from "react";
import { ACTION_TYPES, StoreContext, storeContextType } from "@/context/context";
import { storeType } from "@/types/type";
import { getWebDetails } from "@/lib/helper";


type dynamicPageProps = {
    pageType:string,
    coffeeStore:storeType|null,
    url:string[]|string
}
export default function PageComponent({coffeeStore,pageType,url}:dynamicPageProps){
    const { state,dispatch } = useContext(StoreContext) as storeContextType;
    const {webDetails}=state;
        useEffect(()=>{
            if(!webDetails){            
                dispatch({
                    type: ACTION_TYPES.SET_WEB,
                    payload: {
                        "webDetails":getWebDetails(),
                    },
                  });
            }    
        }, [webDetails,dispatch]);
        


        const page={
            title:url[0],
        }    
        const layout=(pageType=="page")?"DemoAboutDesgin1":"DemoLoginDesgin1";
        if (typeof Layouts[layout as keyof typeof Layouts] === "undefined") {        
            return <div>PageComponent Layouts Not Found...</div>;
        }else{
           const HomeLayout=Layouts[layout as keyof typeof Layouts];
        
            return(                
                <HomeLayout  layout={"WebLayout"}  page={page}  coffeeStores={[]} />
            ) 
        }
        
        
    
    
}