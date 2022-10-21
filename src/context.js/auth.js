import React, { createContext,useState} from "react";


export const AuthContext = createContext({})

function AuthProvider({children}){

    const [User, setUser] = useState({});
    const [E,setE] = useState("");
    const [I,setI] = useState("./assets/img/img_avatar.png");
    const [N,setN] = useState("");
    const [T,setT] = useState("");

    return(
        <AuthContext.Provider value={ {User, setUser,E,setE,I,setI,N,setN,T,setT}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;