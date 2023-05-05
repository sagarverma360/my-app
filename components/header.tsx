import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Header(){
    
    const appName=(process.env.NEXT_PUBLIC_appName||"My-App");
    const [navOpen,setNavOpen]=useState(false);
    const router=useRouter();
    return(
        <header className="sticky top-0 z-50">
            <nav
                className="
                flex flex-wrap
                items-center
                justify-between
                w-full
                py-4
                md:py-0
                px-4
                text-lg text-gray-700
                bg-white
                "
            >
                <div>
                    <Link onClick={()=>setNavOpen(false)} href="/">
                        {appName}
                    </Link>
                </div>
                <span                     
                    onClick={()=>setNavOpen(!navOpen)}
                >
                {(!navOpen)?
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="menu-button"
                        className="h-6 w-6 cursor-pointer md:hidden block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                    :
                    
                    <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        id="menu-button"
                        className="h-6 w-6 cursor-pointer md:hidden block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor" 
                        // viewBox="-46.08 -46.08 552.93 552.93" 
                        >
                        <path id="lineAB" d="M 0 24 l 24 -24" strokeWidth="2" />
                        <path id="lineBC" d="M 0 0 l 24 24"  strokeWidth="2" />
                    </svg>
                    }
                </span>
                
            
                <div className={((navOpen)?"block":"hidden")+" w-full md:flex md:items-center md:w-auto"} id="menu">
                <ul
                    className="
                    pt-4
                    text-base text-gray-700
                    md:flex
                    md:justify-between 
                    md:pt-0"
                >
                    <li className={"border-none md:border-b-2 md:border-solid "+(router.asPath=="/features"?"md:border-red-400 md:hover:border-purple-500 text-purple-500 hover:text-red-400":"md:border-white  hover:text-purple-400")}>
                    <Link onClick={()=>setNavOpen(false)} className="md:p-4 py-2 block" href="/features"
                        >Features</Link>
                    </li>
                    <li className={"border-none md:border-b-2 md:border-solid "+(router.asPath=="/pricing"?"md:border-red-400 md:hover:border-purple-500 text-purple-500 hover:text-red-400":"md:border-white  hover:text-purple-400")}>
                    <Link onClick={()=>setNavOpen(false)} className="md:p-4 py-2 block" href="/pricing"
                        >Pricing</Link>
                    </li>
                    <li className={"border-none md:border-b-2 md:border-solid "+(router.asPath=="/customers"?"md:border-red-400 md:hover:border-purple-500 text-purple-500 hover:text-red-400":"md:border-white  hover:text-purple-400")}>
                    <Link onClick={()=>setNavOpen(false)} className="md:p-4 py-2 block" href="/customers"
                        >Customers</Link>
                    </li>
                    <li className={"border-none md:border-b-2 md:border-solid "+(router.asPath=="/blog"?"md:border-red-400 md:hover:border-purple-500 text-purple-500 hover:text-red-400":"md:border-white  hover:text-purple-400")}>
                    <Link onClick={()=>setNavOpen(false)} className="md:p-4 py-2 block" href="/blog"
                        >Blog</Link>
                    </li>
                    <li className={"border-none md:border-b-2 md:border-solid "+(router.asPath=="/sign_up"?"md:border-red-400 md:hover:border-purple-500 text-purple-500 hover:text-red-400":"md:border-white  hover:text-purple-400")}>
                    <Link onClick={()=>setNavOpen(false)} className="md:p-4 py-2 block"
                        href="/sign_up"
                        >Sign Up</Link>
                    </li>
                    <li className={"border-none md:border-b-2 md:border-solid "+(router.asPath=="/login"?"md:border-red-400 md:hover:border-purple-500 text-purple-500 hover:text-red-400":"md:border-white  hover:text-purple-400")}>
                    <Link onClick={()=>setNavOpen(false)} className="md:p-4 py-2 block"
                        href="/login"
                        >Login</Link>
                    </li>
                </ul>
                </div>
            </nav>
        </header>
    )
}