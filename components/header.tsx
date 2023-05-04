import Link from "next/link";
import { useState } from "react";

export default function Header(){
    const [navOpen,setNavOpen]=useState(false);
    return(
        <header>
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
                    <Link onClick={()=>setNavOpen(false)} href="/home">
                        My-App
                    </Link>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="menu-button"
                    className="h-6 w-6 cursor-pointer md:hidden block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"                    
                    onClick={()=>setNavOpen(!navOpen)}
                >
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            
                <div className={((navOpen)?"block":"hidden")+" w-full md:flex md:items-center md:w-auto"} id="menu">
                <ul
                    className="
                    pt-4
                    text-base text-gray-700
                    md:flex
                    md:justify-between 
                    md:pt-0"
                >
                    <li>
                    <Link onClick={()=>setNavOpen(false)} className="md:p-4 py-2 block hover:text-purple-400" href="/features"
                        >Features</Link>
                    </li>
                    <li>
                    <Link onClick={()=>setNavOpen(false)} className="md:p-4 py-2 block hover:text-purple-400" href="/pricing"
                        >Pricing</Link>
                    </li>
                    <li>
                    <Link onClick={()=>setNavOpen(false)} className="md:p-4 py-2 block hover:text-purple-400" href="/customers"
                        >Customers</Link>
                    </li>
                    <li>
                    <Link onClick={()=>setNavOpen(false)} className="md:p-4 py-2 block hover:text-purple-400" href="/blog"
                        >Blog</Link>
                    </li>
                    <li>
                    <Link onClick={()=>setNavOpen(false)} className="md:p-4 py-2 block hover:text-purple-400 text-purple-500"
                        href="/sign-up"
                        >Sign Up</Link>
                    </li>
                </ul>
                </div>
            </nav>
        </header>
    )
}