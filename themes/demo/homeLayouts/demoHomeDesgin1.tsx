import { pageType, storeType } from "@/types/type";
import Link from "next/link";
import * as layouts from "../layouts";
import useTrackLocation from "@/hooks/use-track-location";
import { useEffect } from "react";

type DemoHomeDesgin1Props = {
  layout?:string|undefined,
  page?:pageType,
  coffeeStores?:storeType[]
}
export default function DemoHomeDesgin1({layout,page,coffeeStores}:DemoHomeDesgin1Props) {
  
  
  if (typeof layouts["WebLayout"] !== "undefined") {
    const {latLong,locationErrorMsg,handelTrackLocation,isFindingLocation}=useTrackLocation();
    useEffect(()=>{
      handelTrackLocation();
    },[]);
    const Layout=layouts["WebLayout"];
    return(
      <Layout page={page} isSubWeb={(layout==="SubWeb")}>
            <>
              {isFindingLocation&&<p>Locating...</p>}
              {locationErrorMsg&&<p>Something went wrong :: {locationErrorMsg}</p>}
              {latLong&&<p>GeoLocation :: {latLong}</p>}
              <h1 className={`mb-3 text-2xl font-semibold`}>Welcome to {page?.title}</h1>
              
              { coffeeStores&&coffeeStores?.length>0 && 
                (
                <section>
                  <h2>ALL Stores</h2>
                  <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
                    {coffeeStores?.map((store:storeType)=>{
                      return(
                          <div key={store.id} className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                          >
                            
                            {/* href={`http://${store.domainName}`} or onClick={()=>{setStoreDetails(store)}}*/}
                              {store.websiteUrl===""?
                              <Link href={`/${store.userName}`}>
                                <h2 className={`mb-3 text-2xl font-semibold`}>
                                  {`${store.name} `}
                                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                    -&gt;
                                  </span>                              
                                </h2>
                                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{store.address}</p>
                              </Link>
                              :
                              <a href={`http://${store.domainName}`} >
                                <h2 className={`mb-3 text-2xl font-semibold`}>
                                  {`${store.name} `}
                                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                    -&gt;
                                  </span>                              
                                </h2>
                                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{store.address}</p>
                              </a>
                              }
                            
                          </div>
                      )
                    })}
                  </div>
                </section>
                )
              }
              <section>  
                <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
                  <a
                    href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                      Docs{' '}
                      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                      </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                      Find in-depth information about Next.js features and API.
                    </p>
                  </a>
    
                  <a
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                      Learn{' '}
                      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                      </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                      Learn about Next.js in an interactive course with&nbsp;quizzes!
                    </p>
                  </a>
    
                  <a
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                      Templates{' '}
                      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                      </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                      Discover and deploy boilerplate example Next.js&nbsp;projects.
                    </p>
                  </a>
    
                  <a
                    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                      Deploy{' '}
                      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                      </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                      Instantly deploy your Next.js site to a shareable URL with Vercel.
                    </p>
                  </a>
                </div>
              </section>
            </>          
          {/* } */}
      </Layout>
    );
      
  }else{
    return <div>DemoHomeDesgin1 WebLayout Not Found...</div>;
  }
}



