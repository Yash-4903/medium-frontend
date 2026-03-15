import { Link } from "react-router-dom"


export const NavBar = () =>{
    return (
        <div className="h-16 flex items-center justify-between border-b-2 mb-10">
            <Link to={"/blogs"}><h1 className="font-serif font-semibold tracking-tight text-3xl ml-16">Medium</h1></Link>
            <div className="flex items-center gap-5 mr-16">
                <Link to={'/NewBlog'}><button  className="bg-neutral-600 h-8 w-32 text-sm tracking-tight font-semibold text-white rounded-xl hover:bg-neutral-800">New Blog</button></Link>
                <Avatar name="yash"/>
            </div>
        </div>
    )
}

const Avatar = ({name}:{name:string}) =>{
    const initials = name?.toString().split(" ")[0][0].toUpperCase()
    return (
        <div className="flex items-center justify-center h-8 w-8 bg-gray-500 text-white rounded-full"><span className="text-white ">{initials}</span></div>
    )
}