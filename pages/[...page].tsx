import { useRouter } from "next/router"


import coffeeStoresData from "@/data/coffee-stores.json";
import { storeType } from "@/types/type";
import PageComponent from "@/components/pageComponent";
import { getWebDetails } from "@/lib/helper";



const menus=getWebDetails().menus;
export async function getStaticProps(context:any) { 
    let pageType="not-found";
//    console.log("hi from server getStaticProps",context);
    let coffeeStore=coffeeStoresData.find((store:storeType)=>{return store.userName==context.params.page[0]});
    if(!coffeeStore&&context.params.page.length==1&&menus.includes(context.params.page[0])){
        pageType="page";
    }else if(coffeeStore&&context.params.page.length==1&&context.params.page[0]==="login"){
        pageType="login-page";
    }else if(coffeeStore&&context.params.page.length==1){
        pageType="sub-domain";
    }else if(coffeeStore&&context.params.page.length>1&&context.params.page[1]==="login"&&coffeeStore.customerLogin){
        pageType="sub-login-page";
    }else if(coffeeStore&&context.params.page.length>1&&((coffeeStore.menus||[]).includes(context.params.page[1]))){
        pageType="sub-page";
    }
    if(pageType=="not-found"){
        return {
            notFound:true
        }
    }
    return {
        props:{
            "pageType":pageType,
            "coffeeStore":coffeeStore?coffeeStore:null
        }
    }
}
export async function getStaticPaths(props:any) {
  const paths:object[]=menus.map((menu)=>{return {params:{page:[menu.toString()]}}})
  return { paths: paths, fallback: true };
  
}
type dynamicPageProps = {
    pageType:string,
    coffeeStore:storeType|null
  }
export default function DynamicPage(pageProps:dynamicPageProps){
   
    const router=useRouter();
    if(router.isFallback){
        return <div>Loding...</div>
    }else{
        
        const curentPage=router.query.page||'';
        return <PageComponent curentPage={curentPage} {...pageProps} />
    }
    
}

