import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function Signup(){
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded border min-w-48 p-8 rounded-xl">
            <Input placeholder="Username"/>
            <Input placeholder="Password"/>

            <div className="flex justify-center p-4">
                <Button loading={false} variant="primary" text="SignUp" fullWidth={true}/>
            </div>
        </div>

    </div>
}

