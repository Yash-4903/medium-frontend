import { NavBar } from "./NavBar"
import type { BlogData } from "../hooks"


export const FullBlog = ({blog}: {blog?: BlogData}) =>{
    return (<>
        <NavBar/>
        <div className="grid grid-cols-10 w-full min-h-[600px] mt-20 px-32 gap-5">
            <div className="col-span-7 ">
                <div className="text-5xl font-extrabold max-w-5xl  mb-3 ">{blog?.title}</div>
                <div className="text-neutral-500 mb-5">{blog?.publishedAt?.slice(0,10)}</div>
                <div className="text-lg ">{blog?.content}</div>
            </div>
            <div className="col-span-3 p-10">
                <div className="font-semibold text-lg mb-5">Autor</div>
                <div className="flex gap-4 items-baseline">
                    <Avatar name={blog?.author.name || "Unknown"}/>
                    <div className="font-bold text-2xl capitalize">{blog?.author.name}</div>
                </div>
            </div>
        </div>
        </>
    )
}

const Avatar = ({name}:{name:string}) =>{
    const initials = name?.toString().split(" ")[0][0].toUpperCase()
    return (
        <div className="flex items-center justify-center h-16 w-16 bg-gray-500 text-white rounded-full"><span className="text-white ">{initials}</span></div>
    )
}