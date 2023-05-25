
import * as Layouts from "@/themes/demo";
import { useContext, useEffect } from "react";
import { Store_data, sotoreContextType } from "@/context/context";
import { Web_data, webContextType } from "@/context/webContext";
import { storeType } from "@/types/type";
import { useRouter } from "next/router"
import { getWebDetails } from "@/lib/helper";


type dynamicPageProps = {
    pageType:string,
    coffeeStore:storeType|null,
    curentPage:string[]|string
  }
export default function PageComponent({coffeeStore,pageType,curentPage}:dynamicPageProps){
    const { webDetails,setWebDetails } = useContext(Web_data) as webContextType;
    const { sotreDetails,setStoreDetails } = useContext(Store_data) as sotoreContextType;
    
        useEffect(()=>{
            if(!webDetails){            
                setWebDetails(getWebDetails());
            }    
        }, [webDetails,setWebDetails]);
        
        // const {coffeeStore,pageType}=pageProps;
        useEffect(()=>{
            if(coffeeStore&&(!sotreDetails||sotreDetails.userName!==coffeeStore?.userName)){
                setStoreDetails(coffeeStore);
            }    
        }, [coffeeStore,setStoreDetails,sotreDetails]);


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