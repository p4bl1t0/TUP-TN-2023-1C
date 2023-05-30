import { createContext, useContext } from "react";

const AuthContext = createContext(null);

export default AuthContext;

// REVIEW: Custom hook para facilitar acceso a datos de context
export const useAuthUser = () => {
    const authContext = useContext(AuthContext);
    return authContext?.user;
}