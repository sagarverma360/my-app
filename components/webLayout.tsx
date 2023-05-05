
import Head from "next/head";
import Header from "./header";
import { Inter } from 'next/font/google'
import { ReactNode } from "react";

const inter = Inter({ subsets: ['latin'] })
type webLayoutProps = {
    page?:{
        title?:string,
        description?:string,
        useTitleAsH1?:boolean,
        useHeader?:boolean
    },
    children: ReactNode
  }

export default function WebLayout({ children, ...pageProps }:webLayoutProps){
    const appName=(process.env.appName||"My-App");
    const pageTitle=(pageProps?.page?.title||appName).trim().replace(/[_]/g,' ').toLowerCase().replace(/\b[a-z]/g,(l)=>{return l.toUpperCase()});
    return(
        <>
            <Head>
                {/* <title>{pageTitle&&pageTitle+" :: "} {appName}</title> */}
                <title>{pageTitle}</title>
                {pageProps.page && pageProps.page.description&&<meta name="description" content={pageProps.page.description||''} />}
            </Head>
            {pageProps.page && (pageProps.page.useHeader==false?false:true)&&<Header />}
            
            
            <main
                className={`relative flex min-h-screen flex-col items-center justify-between px-2 py-12 md:p-24 ${inter.className}`}
            >
            {pageProps.page && (pageProps.page.useTitleAsH1==false?false:true)&&pageTitle&&<h1 className={`mb-3 text-2xl font-semibold`}>{pageTitle}</h1>}
            {children}
            </main>
        </>
    )

}