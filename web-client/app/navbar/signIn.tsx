import { signInWithGoogle, signOut} from "../firebase/firebase"
import { User } from 'firebase/auth';


interface SignInProps {
  user: User | null;
}

export default function SignIn({ user }: SignInProps) {

  return (
    <div>
      {user ? (
        <button className="" onClick={signOut}>
          Sign Out
        </button>
      ) : (
        <button className="" onClick={signInWithGoogle}>
          Sign in
        </button>
      )}
    </div>
  );
}
