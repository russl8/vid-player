import { onAuthStateChangedHelper } from "@/app/firebase/firebase";
import { RootState } from "@/store/store";
import { setUser } from "@/store/userSlice";
import { User } from "@firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useUser = () : User|null => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedHelper((user) =>
      dispatch(setUser(user))
    );
    return () => unsubscribe();
  });

  const user: User | null = useSelector((state: RootState) => state.user.value);
  return user;
};

export default useUser;
