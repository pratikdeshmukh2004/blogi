import jwtDecode from "jwt-decode"
import { useContext, useState } from "react"
// import AuthContext from "./context"
import authStorage from "./storage"

const useAuth = () => {
    const [ user, setUser ] = useState()
    const logOut = () => {
        setUser(null)
        authStorage.removeToken()
    }
    const logIn = (authToken) => {
        const user = jwtDecode(authToken)
        setUser(user)
        authStorage.storeToken(authToken)
    }
    return { user, logOut, logIn }
}

export default useAuth;