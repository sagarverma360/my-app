
import type {storeType} from '@/types/type';
import coffeeStoresData from "@/data/coffee-stores.json";
export function getSotreDetails() {
    
    let domainName = window.location.hostname;
    let coffeeStore=coffeeStoresData.find((store:storeType)=>{return store.domainName==domainName});
    domainName=domainName.indexOf(".")!=-1?domainName.split(".")[0]:process.env.NEXT_PUBLIC_appName||"My-App";
    domainName=domainName.indexOf(":")!=-1?domainName.split(":")[0]:domainName;
    if(!coffeeStore){
        coffeeStore=coffeeStoresData[0];
    }
  return coffeeStore;
}

export function getWebDetails() {
  return({
    "name":process.env.NEXT_PUBLIC_appName||"My-App",
    "menus":process.env.NEXT_PUBLIC_appMenus?.split(',')||[],
    "customerLogin":process.env.NEXT_PUBLIC_customerLogin||false,
    "address":process.env.NEXT_PUBLIC_address||''
  });
}