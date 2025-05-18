'use client'
import {
  signInWithGoogle
  // , signOut
} from "../firebase/firebase"

import { User } from 'firebase/auth';
import { Dropdown } from "./dropdown";
import { Button } from "@/components/ui/button";
// import { useSelector } from "react-redux";
// import { RootState } from "@/lib/store";
import useUser from "@/hooks/useUser";


export default function SignIn() {

  const user: (User|null) = useUser();

  return (
    <div>
      {user ? (
        <Dropdown userName={user?.displayName} />
      ) : (

        <Button onClick={signInWithGoogle}>
          Login
        </Button>
      )}
    </div>
  );
}