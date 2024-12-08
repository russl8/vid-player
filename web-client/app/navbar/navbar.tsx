'use client';

import SignIn from "./signIn";
import Link from "next/link";

import { useEffect, useState } from "react";
import { onAuthStateChangedHelper } from "../firebase/firebase";
import { User } from "firebase/auth";
import Upload from "./upload";


function NavBar() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedHelper((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);


  return (
    <nav className="">
      <Link href="/">
        <span className="">
          <div>
            Logo
          </div>
        </span>
      </Link>
      {user && <Upload  />}
      <SignIn user={user} />
    </nav>
  );
}

export default NavBar;
