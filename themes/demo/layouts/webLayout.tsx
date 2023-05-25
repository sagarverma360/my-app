
import Head from "next/head";
import * as Headers from "../components/header";
import { Inter } from 'next/font/google'
import { ReactNode, useContext, useEffect} from "react";
import { Web_data, webContextType } from "@/context/webContext";
import type {pageType} from '@/types/type';

const inter = Inter({ subsets: ['latin'] })
type webLayoutProps = {
    isSubWeb?:boolean,
    page?:pageType,
    children: ReactNode
  }

export default function WebLayout({ children, ...pageProps }:webLayoutProps){
    const { webDetails } = useContext(Web_data) as webContextType;
    // useEffect(()=>{
    //     if(!webDetails){            
    //         setWebDetails({
    //             appName:process.env.NEXT_PUBLIC_appName||"My-App",
    //             menus:process.env.NEXT_PUBLIC_appMenus?.split(',')||[],
    //             customerLogin:process.env.NEXT_PUBLIC_customerLogin||false
    //         });
    //     }    
    // }, []);
    if(typeof Headers["Header"]!==undefined){
        const Header=Headers["Header"];
        const appName=(process.env.appName||"My-App");
        const pageTitle=(pageProps?.page?.title||appName).trim().replace(/[_]/g,' ').toLowerCase().replace(/\b[a-z]/g,(l)=>{return l.toUpperCase()});
        return( 
            <>
            
                {(webDetails)&&
                    <>
                        <Head>
                            {/* <title>{pageTitle&&pageTitle+" :: "} {appName}</title> */}
                            <title>{pageTitle}</title>
                            {pageProps.page && pageProps.page.description&&<meta name="description" content={pageProps.page.description||''} />}
                        </Head>
                        {pageProps.page && (pageProps.page.useHeader==false?false:true)&&<Header isSubWeb={pageProps?.isSubWeb}/>}
                        
                        
                        <main
                            className={`relative flex min-h-screen flex-col items-center justify-between px-2 py-12 md:p-24 ${inter.className}`}
                        >
                        {/* {pageProps.page && (pageProps.page.useTitleAsH1==false?false:true)&&pageTitle&&<h1 className={`mb-3 text-2xl font-semibold`}>{pageTitle}</h1>} */}
                        {children}
                        </main>
                    </>
                }
            </>
        )
    }else{
        return <div>Header Not Found...</div>;
    }
    

}