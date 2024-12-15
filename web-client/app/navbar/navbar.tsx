'use client';

import SignIn from "./signIn";
import Link from "next/link";

import { useEffect, useState } from "react";
import { onAuthStateChangedHelper } from "../firebase/firebase";
import { User } from "firebase/auth";
// import { Dropdown } from "./dropdown";
// import Upload from "./upload";


function NavBar() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedHelper((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);


  return (

    <>
      <nav className="flex justify-between py-2 px-4 mx-12 " >
        <Link href="/">
          <div className="flex font-bold items-center ">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tent-tree"><circle cx="4" cy="4" r="2" /><path d="m14 5 3-3 3 3" /><path d="m14 10 3-3 3 3" /><path d="M17 14V2" /><path d="M17 14H7l-5 8h20Z" /><path d="M8 14v8" /><path d="m9 14 5 8" /></svg>
            <p className="ml-1 text-xl font-mono flex ">Vid.<span className="text-blue-900">ios</span></p>
          </div>
        </Link>
        {/* {user && <Upload />} */}
        <SignIn user={user} />
        {/* <Dropdown/> */}
      </nav>
    </>
  );
}

export default NavBar;
