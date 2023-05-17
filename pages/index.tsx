import WebLayout from '@/components/webLayout'


import Link from "next/link";
import coffeeStoresData from "@/data/coffee-stores.json";
import {storeType} from '@/types/type';
import { useContext } from 'react';
import { Store_data, sotoreContextType } from '@/context/context';

export async function getStaticProps(context:any) { 
  console.log("hi from server");
  
  // let domainName = "localhost";//context.req.headers.host;
  // // domainName=domainName.indexOf(".")!=-1?domainName.split(".")[0]:process.env.NEXT_PUBLIC_appName||"My-App";
  // domainName=domainName.indexOf(":")!=-1?domainName.split(":")[0]:domainName;
  // // domainName=domainName.trim().replace(/[_]/g,' ').toLowerCase().replace(/\b[a-z]/g,(l:string)=>{return l.toUpperCase()});
  // let coffeeStore=coffeeStoresData.find((store:storeType)=>{return store.domainName==domainName});
  // if(!coffeeStore){
  //   coffeeStore={
  //     "id": 0,
  //     "domainName":"localhost",
  //     "title":"My store",
  //     "name": "My store",
  //     "imgUrl": "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
  //     "websiteUrl": "https://www.strangelovecoffee.ca/",
  //     "address": "983 Queen St E, Toronto, ON M4M 1K2",
  //     "neighbourhood": "at King and Spadina"
  //   };
  // }
  
  


  return {
    props:{
      // domainName,
      // coffeeStore,
      coffeeStores:coffeeStoresData
    }
  }
}

// export async function getStaticPaths(props:any) {
//   console.log(props);
//   return { paths: [], fallback: false };
  
// }
// type homeProps = {
//   domain?:{
//       name?:string,
//   },
//   children: ReactNode
// }
export default function Home(props:any) { 
  console.log("hi from client");
  const { sotreDetails : coffeeStore,setStoreDetails} = useContext(Store_data) as sotoreContextType;
  
  
  const appName=(coffeeStore?.title||process.env.NEXT_PUBLIC_appName||"My-App");
  const page={
    title:appName,
    useTitleAsH1:false,
    // description:curentPage as string            
  }    
  return (    
      <WebLayout page={page}>
        <h1 className={`mb-3 text-2xl font-semibold`}>Welcome to {page.title}</h1>
        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        { props?.coffeeStores?.length>0 && 
          (<>
            <h2>ALL Stores</h2>
            <div>
              {props?.coffeeStores?.map((store:storeType)=>{
                return(
                    <div key={store.id}>
                      
                      {/* href={`http://${store.domainName}`} */}
                        <a  onClick={()=>{setStoreDetails(store)}}>
                          <h3>{store.name}</h3>
                        </a>
                      
                      
                    </div>
                )
              })}
            </div>
          
          
          
          </>)
        }



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
      </WebLayout>
  )
} 

