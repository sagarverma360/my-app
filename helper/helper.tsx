
import {storeType} from '@/types/type';
import coffeeStoresData from "@/data/coffee-stores.json";
export function getSotreDetails() {
    
    let domainName = window.location.hostname;
    let coffeeStore=coffeeStoresData.find((store:storeType)=>{return store.domainName==domainName});
    domainName=domainName.indexOf(".")!=-1?domainName.split(".")[0]:process.env.NEXT_PUBLIC_appName||"My-App";
    domainName=domainName.indexOf(":")!=-1?domainName.split(":")[0]:domainName;
    if(!coffeeStore){
        coffeeStore={
        "id": 0,
        "domainName":"localhost",
        "title":"My store",
        "name": "My store",
        "imgUrl": "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
        "websiteUrl": "https://www.strangelovecoffee.ca/",
        "address": "983 Queen St E, Toronto, ON M4M 1K2",
        "neighbourhood": "at King and Spadina"
        };
    }
  return coffeeStore;
}