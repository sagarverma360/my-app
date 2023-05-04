
import Head from "next/head";
import Header from "./header";
import { Inter } from 'next/font/google'
import { ReactNode } from "react";

const inter = Inter({ subsets: ['latin'] })
type webLayoutProps = {
    page?:{
        title?:string,
        description?:string
    },
    children: ReactNode
  }

export default function WebLayout({ children, ...pageProps }:webLayoutProps){
    
    return(
        <>
            <Head>
                <title>{pageProps?.page?.title||''}</title>
                {pageProps.page && pageProps.page.description&&<meta name="description" content={pageProps.page.description||''} />}
            </Head>
            <Header />
            
            <main
                className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
            >
            {children}
            </main>
        </>
    )

}