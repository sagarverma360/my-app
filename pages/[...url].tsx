import { useRouter } from "next/router"


import coffeeStoresData from "@/data/coffee-stores.json";
import { storeType } from "@/types/type";
import * as Components from "@/components/page";
import { getWebDetails } from "@/lib/helper";



const menus=getWebDetails().menus;
export async function getStaticProps(context:any) { 
    let isSubDomain=false;
    let pageType="not-found";
    let coffeeStore=undefined;
    if(context.params.url.length==1&&context.params.url[0]==="login"){
        pageType="login";
    }else if(context.params.url.length==1&&menus.includes(context.params.url[0])){
        pageType="page";
    }else{
        coffeeStore=coffeeStoresData.find((store:storeType)=>{return store.userName==context.params.url[0]});
        if(coffeeStore){ 
            isSubDomain=true;
            if(context.params.url.length==1){                          
                pageType="index";
            }else if(context.params.url.length>1){
                if(context.params.url[1]==="login"&&coffeeStore.customerLogin){
                    pageType="login";
                }else if(((coffeeStore.menus||[]).includes(context.params.url[1]))){
                    pageType="page";
                }
            }
            
        }
    }
    if(pageType=="not-found"){
        return {
            notFound:true
        }
    }
    return {
        props:{
            "isSubDomain":isSubDomain,
            "pageType":pageType,
            "coffeeStore":coffeeStore?coffeeStore:null
        }
    }
}
export async function getStaticPaths(props:any) {
  const paths:object[]=menus.map((menu)=>{return {params:{url:[menu.toString()]}}})
  return { paths: paths, fallback: true };
  
}
type dynamicPageProps = {
    isSubDomain:boolean,
    pageType:string,
    coffeeStore:storeType|null
}
export default function DynamicPage(pageProps:dynamicPageProps){
   
    const router=useRouter();
    if(router.isFallback){
        return <div>Loding...</div>
    }else{        
        const {isSubDomain}=pageProps;
        const url=router.query.url||"";
        const component=(isSubDomain)?"SubDomainComponent":"PageComponent";
        if (typeof Components[component as keyof typeof Components] === "undefined") {        
            return <div>Dynamic Page Component Layouts Not Found...</div>;
        }else{
            const Component=Components[component as keyof typeof Components];
            return <Component url={url} {...pageProps} />
        } 
    }
    
}

