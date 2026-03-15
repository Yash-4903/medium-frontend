import axios from "axios";
import { useEffect, useState } from "react"
import { VITE_BACKEND_URL } from "../config";

 export interface BlogData {
    id: string
    title: string
    content: string
    publishedAt: string
    author:{
        name: string
    }
}


export const useBlogs = () =>{
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<BlogData[]>([]);

    useEffect(()=>{
        axios.get(`${VITE_BACKEND_URL}/api/v1/blog/bulk`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(response=>{
                setBlogs(response.data.blog);
                setLoading(false)
            })
    },[])

    return {
        loading,
        blogs
    }
}

export const useBlog = ({id}:{id : string  }) =>{
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<BlogData>();

    useEffect(()=>{
        axios.get(`${VITE_BACKEND_URL}/api/v1/blog/${id}`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(response=>{
                setBlog(response.data.blog);
                setLoading(false)
            })
    },[id])

    return {
        loading,
        blog
    }
}