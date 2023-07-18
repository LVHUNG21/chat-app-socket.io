// context api as redux;
import { createContext,useCallback,useState } from "react"

export const  AuthContext = createContext()

export const AuthContextProvider= ({children})=>{
    const [user,setUser]=useState(
        null
    )
    const [registerError,setRegisterError]=useState(null);
    const [isregisterLoading,setRegisterLoading]=useState(false);
    const [registerInfo,setRegisterInfo]=useState({
        name:"",
        email:"",
        password:"",
    })
    const updateRegisterInfo=useCallback((info)=>{
        setRegisterInfo(info);
    },[]);
    const registerUser= useCallback(async()=>{
        setRegisterLoading(true)
        setRegisterError(null);
    await postRequest(`${baseUrl}/users/register`,JSON.stringify(registerInfo));
    setRegisterLoading(false);
    if (response.error){
        return setRegisterError(response);
    }

    localStorage.setItem("User",JSON.stringify(response))
    setUser(response);
    })
    return <AuthContext.Provider value={{user,registerInfo,updateRegisterInfo,updateRegisterInfo,registerUser,registerError}}>
        {children}
    </AuthContext.Provider>
}