import { StoreContext, storeContextType } from "@/context/context";
import Link from "next/link";
import { useRouter } from "next/router";
import {  useContext, useState } from "react";

type headerProps={
    isSubWeb:boolean|undefined
}

export default function Header({isSubWeb}:headerProps){
    const { state } = useContext(StoreContext) as storeContextType;
    const {webDetails,storeDetails}=state;
    
    const dataProvider=(isSubWeb==true)?storeDetails||webDetails:webDetails;
    const urlPreFix=(isSubWeb==true)?(storeDetails)?"/"+storeDetails?.userName:"":"";
    const [navOpen,setNavOpen]=useState(false);
    const router=useRouter();
    console.log("dataProvider",dataProvider);
    console.log("isSubWeb",isSubWeb);
    
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
                    {isSubWeb==true&&storeDetails?.parentUserName!=""?
                    <Link onClick={()=>setNavOpen(false)} href={`/${storeDetails?.parentUserName}`}>
                        {storeDetails?.parentName}
                    </Link>:
                    <Link onClick={()=>setNavOpen(false)} href={`/`}>
                        {webDetails?.name}
                    </Link>
                    }
                    {isSubWeb==true&&
                    <>                    
                    {" / "}
                    <Link onClick={()=>setNavOpen(false)} href={`/${storeDetails?.userName}`}>
                        {storeDetails?.name||webDetails?.name}
                    </Link>
                    </>}
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
                
                    {dataProvider?.menus?.map((menu:string)=>{
                         console.log(menu);
                        
                        const menuTitle=menu.trim().replace(/[_-]/g,' ').toLowerCase().replace(/\b[a-z]/g,(l:string)=>{return l.toUpperCase()});
                        return(
                            <li key={menu} className={"border-none md:border-b-2 md:border-solid "+(router.asPath==`${urlPreFix}/${menu}`?"md:border-red-400 md:hover:border-purple-500 text-purple-500 hover:text-red-400":"md:border-white  hover:text-purple-400")}>
                                <Link onClick={()=>setNavOpen(false)} className="md:p-4 py-2 block" href={`${urlPreFix}/${menu}`}
                                >{menuTitle}</Link>
                            </li>
                        );
                    })}
                    {dataProvider?.customerLogin&&
                    <li className={"border-none md:border-b-2 md:border-solid "+(router.asPath==`${urlPreFix}/login`?"md:border-red-400 md:hover:border-purple-500 text-purple-500 hover:text-red-400":"md:border-white  hover:text-purple-400")}>
                        <Link onClick={()=>setNavOpen(false)} className="md:p-4 py-2 block"
                        href={`${urlPreFix}/login`}
                        >Login</Link>
                    </li>
                    }
                </ul>
                </div>
            </nav>
        </header>
    )
}