// context api as redux;
import { createContext,useCallback,useEffect,useState } from "react"
import { baseUrl,postRequest } from "../utils/services"
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
    });

    const [loginError,setLoginError]=useState(null);
    const [isLoginLoading,setIsLoginLoading]=useState(false);
    const [loginInfo,setLoginInfo]=useState({
        email:"",
        password:"",    
    })
     
    console.log("registerInfo",registerInfo)
    useEffect(()=>{
        const user=localStorage.getItem("User");
        setUser(JSON.parse(user));
    },[])

    const updateRegisterInfo=useCallback((info)=>{
        setRegisterInfo(info);
    },[]);  
    const updateLoginInfo=useCallback((info)=>{
        setLoginInfo(info);
    },[]);
    const registerUser= useCallback(async()=>{
        setRegisterLoading(true)
        setRegisterError(null);
        
    await postRequest(`${baseUrl}/user/register`,JSON.stringify(registerInfo));
    setRegisterLoading(false);
    if (response.error){
        console.log('error')
        return setRegisterError(response);
    }

    localStorage.setItem("User",JSON.stringify(response))
    setUser(response);
    },[registerInfo])

    const loginUser  =useCallback(async (e)=>{
        e.preventDefault()
        setIsLoginLoading(true)
        setLoginError(null);
        const respone =await postRequest(`${baseUrl}/user/login`,JSON.stringify(loginInfo))
        if(respone.error){
            return setLoginError(respone);
        }
        localStorage.setItem("User",JSON.stringify(respone));
        setUser(respone); 
         setIsLoginLoading(false)
    },[loginInfo]);
    const logoutUser=useCallback(()=>{
        localStorage.removeItem("User");
        setUser(null);
    },[])
    return <AuthContext.Provider value={{user,registerInfo,updateRegisterInfo,registerUser,registerError,logoutUser,loginUser,loginError,loginInfo,updateLoginInfo,isLoginLoading}}>
        {children}
    </AuthContext.Provider>
}