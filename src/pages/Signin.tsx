
import Quote from "../components/Quote";
import { SigninAuth } from "../components/SigninAuth";

export default function Signin(){
    return (
        <>
        <div className="grid grid-cols-2">
            <SigninAuth/>
            <Quote/>
        </div>
        </>
    )
}