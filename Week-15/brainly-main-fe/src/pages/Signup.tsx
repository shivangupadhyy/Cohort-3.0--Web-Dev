import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useRef } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

export function Signup(){

    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

   async function signup() {
  const username = usernameRef.current?.value;
  const password = passwordRef.current?.value;

  try {
    await axios.post(BACKEND_URL + "/api/v1/signup", {
      username,
      password,
    });

    alert("Signup successful");
  } catch (error: any) {
    if (error.response?.status === 409) {
      alert("User already exists. Please sign in.");
    } else {
      alert("Something went wrong. Try again later.");
    }
  }
}
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded border min-w-48 p-8 rounded-xl">
            <Input ref={usernameRef} placeholder="Username"/>
            <Input ref={passwordRef} placeholder="Password"/>

            <div className="flex justify-center p-4">
                <Button onClick={signup} loading={false} variant="primary" text="SignUp" fullWidth={true}/>
            </div>
        </div>

    </div>
}

export default Signup;