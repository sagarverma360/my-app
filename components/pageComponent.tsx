
import * as Layouts from "@/themes/demo";
import { useContext, useEffect } from "react";
import { ACTION_TYPES, StoreContext, storeContextType } from "@/context/context";
import { storeType } from "@/types/type";
import { getWebDetails } from "@/lib/helper";


type dynamicPageProps = {
    pageType:string,
    coffeeStore:storeType|null,
    curentPage:string[]|string
  }
export default function PageComponent({coffeeStore,pageType,curentPage}:dynamicPageProps){
    // const { webDetails,setWebDetails } = useContext(Web_data) as webContextType;
    // const { storeDetails,dispatch } = useContext(Store_data) as storeContextType;
    const { state,dispatch } = useContext(StoreContext) as storeContextType;
    const {webDetails,storeDetails}=state;
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
        
        // const {coffeeStore,pageType}=pageProps;
        useEffect(()=>{
            if(coffeeStore&&(!storeDetails||storeDetails.userName!==coffeeStore?.userName)){
                dispatch({
                    type: ACTION_TYPES.SET_STORE,
                    payload: {
                        "storeDetails":coffeeStore,
                    },
                  });
            }    
        }, [coffeeStore,dispatch,storeDetails]);


        const page={
            title:(pageType=="page")?curentPage[0]:((pageType!="sub-domain")?`${curentPage[1]} :: `:``)+coffeeStore?.title as string,
        }    
        const layout=(pageType=="page"||pageType=="sub-page")?"DemoAboutDesgin1":(pageType=="sub-domain")?"DemoHomeDesgin2":"DemoLoginDesgin1";
        if (typeof Layouts[layout as keyof typeof Layouts] === "undefined") {        
            return <div>PageComponent Layouts Not Found...</div>;
        }else{
           const HomeLayout=Layouts[layout as keyof typeof Layouts];
        
            return(
                <>
                {
                    {
                        "page":
                            <HomeLayout  layout={"WebLayout"}  page={page}  coffeeStores={[]} />
                                
                            ,
                        "sub-domain":<HomeLayout layout={"SubWeb"} coffeeStores={[]} page={page} />,
                        "sub-page":<HomeLayout  layout={"SubWeb"}  page={page} coffeeStores={[]} />,
                        "sub-login-page":coffeeStore?<div>sub-login-page {coffeeStore.domainName}</div>:<></>
                    }[pageType]
                }
                
                </>
            ) 
        }
        
        
    
    
}