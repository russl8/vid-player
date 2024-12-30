import { onAuthStateChangedHelper } from "./firebase";

export async function userIsSignedIn(): Promise<boolean> {
  const res = await new Promise<boolean>((resolve) => {
    onAuthStateChangedHelper((user) => {
      resolve(!!user); // Resolve true if user exists, otherwise false
    });
  });
  return res;
}
