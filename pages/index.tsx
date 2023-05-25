
import { Web_data, webContextType } from "@/context/webContext";
import coffeeStoresData from "@/data/coffee-stores.json";
import { getWebDetails } from "@/lib/helper";
import * as Layouts from "@/themes/demo";
import { useContext, useEffect } from "react";

export async function getStaticProps(context:any) { 

  return {
    props:{
      // "appName":(process.env.appName||"My-App"),
      "coffeeStores":coffeeStoresData
    }
  }
}

export default function Home(props:any) { 
  const { webDetails,setWebDetails } = useContext(Web_data) as webContextType;
  useEffect(()=>{
    if(!webDetails){            
        setWebDetails(getWebDetails());
    }    
}, [webDetails,setWebDetails]);
  
  const {coffeeStores}=props;
  
  const page={
    title:webDetails?.name,
    useTitleAsH1:false,         
  }   
  
  if (typeof Layouts["DemoHomeDesgin1"] !== "undefined") {
    const HomeLayout=Layouts["DemoHomeDesgin1"];
    const layoutProps={
      layout:"WebLayout",
      coffeeStores,
      page
    };
    return <HomeLayout  {...layoutProps}/>;
      
  }else{
    console.log("Layouts",Layouts);
    
    return <div>Home Layouts Not Found...</div>;
  }
} 

