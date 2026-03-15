import { useState } from "react"
import { NavBar } from "./NavBar"
import axios from "axios"
import { VITE_BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"

export const AddBlog = () =>{
    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    return <div>
        <NavBar/>
        <div className="max-w-3xl mx-auto">
            <textarea  onChange={(e)=>{
                setTitle(e.target.value)
            }} placeholder="Title" className="resize-none w-full min-h-32 leading-tight  text-neutral-800 capitalize placeholder:text-neutral-400 font-serif text-5xl placeholder:font-light focus:outline-none" ></textarea>
            <textarea onChange={(e)=>{
                setContent(e.target.value)
            }} placeholder="Tell Your Story ..."  className=" resize-none capitalize w-full h-96 flex items-start justify-start text-xl font-serif focus:outline-none"></textarea>
            <button onClick={async()=>{
                try {
                    const res = await axios.post(`${VITE_BACKEND_URL}/api/v1/blog`,{
                        title,
                        content
                    },{
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                    } )
                    navigate(`/blog/${res.data.id}`)
                } catch (error) {
                    console.error("Error creating blog:", error);
                    alert("Failed to create blog. Please try again.");
                }
            }} className="w-full h-10 bg-green-400 rounded-xl text-lg font-bold transition-all hover:scale-x-95">Publish</button>
        </div>
    </div>
}