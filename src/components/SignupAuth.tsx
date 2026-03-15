import { useState, type ChangeEvent } from "react"
import { Link, useNavigate } from "react-router-dom"
import { type SignupInput } from "@yash4903/medium-common"
import axios from "axios"
import { VITE_BACKEND_URL } from "../config"



export const SignupAuth = () =>{
    const navigate = useNavigate()
    const [ userInput, setUserInput] = useState<SignupInput>({
    email: "",
    name: "",
    password: ""
})

    async function sendData(){
        try {
            console.log(userInput)
            const response = await axios.post(`${VITE_BACKEND_URL}/api/v1/user/signup`, userInput) 
            const jwt = response.data.jwt
            localStorage.setItem("token", jwt)
            navigate("/blogs")
        } catch (error: any) {
            console.log(error.response?.data)
            alert(error.response?.data?.message || "Signup failed")
        }
    }

    return <>
        
        <div className="mx-32 my-32">
            <div className="flex items-center justify-center flex-col mb-16">
                <h1 className="text-4xl tracking-tight font-extrabold mb-1">Create an account</h1>
                <div className="flex gap-2">
                    <h6>Already have an account?</h6> 
                    <Link className="underline" to="/signin">Login</Link>
                </div>
            </div>
            <LabelInput  label="email" placeholder="Enter your email" onChange={(e)=>{setUserInput({...userInput,email:e.target.value})}}/>
            <LabelInput  label="name" placeholder="Enter your name" onChange={(e)=>{setUserInput({...userInput,name:e.target.value})}}/>
            <LabelInput  label="password" placeholder="Enter your password" type="password" onChange={(e)=>{setUserInput({...userInput,password:e.target.value})}}/>

            <button onClick={sendData} className="w-full h-12 text-center shadow-2xl text-white bg-neutral-950 rounded-lg font-medium text-lg my-16 transition-all hover:bg-neutral-800 hover:scale-95">Sign Up</button>
        </div>

    </>
}

interface LabelInputType {
    label: string
    placeholder: string
    type?: string
    onChange: (e: ChangeEvent<HTMLInputElement> )=>void
}

const LabelInput = ({label, placeholder, type, onChange}:LabelInputType) =>{
    return(
        <div>
            <h1 className="text-xl font-bold tracking-tight capitalize mb-1">{label}</h1>
            <input 
            placeholder={placeholder} 
            type={type || "text"}
            onChange={onChange}
            className="border border-neutral-500 rounded-md mb-8 w-full h-10 px-2 focus:outline-none focus:ring-0 placeholder:text-neutral-600 shadow-md focus:bg-neutral-100"
            ></input>
        </div>
    )
}