import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


// etar modhe kone dependency thakle const useAuth = (ekhane parameter hisebe nite hobe akadik hole o , die nea jabe)
const useAuth = () => {
  const auth = useContext(AuthContext)
  return auth
};

export default useAuth;