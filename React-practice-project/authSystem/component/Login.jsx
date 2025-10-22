import { useContext, useState } from "react";
import { AuthContext } from "./AuthSystem";

const Login = ({onlogin: propOnLogin})=> {

    const [username, setUsername] = useState('');
    const contextValue = useContext(AuthContext);

    const handleLogin = () =>{
        if(contextValue?.login){
            contextValue.login(username);
        }else if(propOnLogin){
            propOnLogin(username);
        }
        setUsername('');
    };


    return(
        <div>

        </div>
    )
}

export default Login;