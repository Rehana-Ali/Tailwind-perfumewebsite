import Image from "next/image";
import Link from "next/link";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu, MenuIcon } from "lucide-react";

export default function Header() {
  return (
  
    
<main>

    {/* <!-- Navbar --> */}
    <nav className="bg-white text-black   pt-4 md:flex justify-around items-center ">
        <div className="container mx-auto flex justify-between items-center">
        <Image src={"/logo.jpg"} width={50} height={30} alt="logo" className="ml-5"/>

            <h1 className="text-4xl font-bold pt-4 " >Perfume Heaven</h1>



            <ul className="hidden md:block ">
               
               <li className="space-x-5 mr-60">
                <Link href="/" className="hover:text-teal-400">Home</Link>
                <Link href="about" className="hover:text-teal-400">About</Link>
                 <Link href="contact" className="hover:text-teal-400">Contact</Link>
                </li>

                 </ul>

        <Sheet>
  <SheetTrigger className="text-1xl pr-24 md:hidden"><Menu /></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle className="mr-60">Rehana Ali</SheetTitle>
      <SheetDescription>
        
       <ul className="mr-60 space-y-10">

                <li><Link href="/" className="hover:text-teal-400">Home</Link></li>
                <li><Link href="about" className="hover:text-teal-400">About</Link></li>
                <li><Link href="contact" className="hover:text-teal-400">Contact</Link></li> 

                 </ul>

      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
            
      
        </div>
    </nav>
    
    </main>

    )
    }
    Header