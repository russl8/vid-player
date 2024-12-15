import {
  signInWithGoogle
  // , signOut
} from "../firebase/firebase"

import { User } from 'firebase/auth';
import { Dropdown } from "./dropdown";


interface SignInProps {
  user: User | null;
}

export default function SignIn({ user }: SignInProps) {

  return (
    <div>
      {user ? (
        <Dropdown userName={user?.displayName} />
        // <button className="flex px-2 py-1 rounded-md border-black border-2  " onClick={signOut} >
        //   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" x2="9" y1="12" y2="12" /></svg>
        //   <p className="ml-1 text-sm">Sign Out</p>
        // </button>
      ) : (
        <button className="flex" onClick={signInWithGoogle}>
          Sign in
        </button>
      )}
    </div>
  );
}