import { pageType, storeType } from "@/types/type";
import Link from "next/link";
import * as layouts from "../layouts";

type DemoAboutDesgin1Props = {
  layout?:string|undefined,
  page?:pageType,
  coffeeStores?:storeType[]
}
export default function DemoAboutDesgin1({layout,page,coffeeStores}:DemoAboutDesgin1Props) {
  const pageTitle=(page?.title||"").trim().replace(/[_]/g,' ').toLowerCase().replace(/\b[a-z]/g,(l)=>{return l.toUpperCase()});
  
  if (typeof layouts["WebLayout"] !== "undefined") {
    const Layout=layouts["WebLayout"];
    return(
      <Layout page={page} isSubWeb={(layout==="SubWeb")}>
            <>
              <h1 className={`mb-3 text-2xl font-semibold`}>{pageTitle}</h1>
              
            </>          
          {/* } */}
      </Layout>
    );
      
  }else{
    return <div>DemoAboutDesgin1 WebLayout Not Found...</div>;
  }
}



