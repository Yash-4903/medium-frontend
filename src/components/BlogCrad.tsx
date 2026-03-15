import { Link } from "react-router-dom"

interface BlogCardInput {
    id: string
    name: string
    publishedAt: string
    title: string
    description: string
}

export const BlogCard = ({name, publishedAt, title, description, id}:BlogCardInput) =>{
    return (<>
    <Link to={`/blog/:${id}`}>
        <div className="p-5 flex justify-between gap-10 cursor-pointer hover:bg-neutral-100 rounded-2xl">
            <div className="">
                <div className="flex gap-2 items-baseline mb-2">
                <Avatar name="dev"/>
                <h1 className="capitalize font-medium text-sm tracking-tight">{name}</h1>
                <h2 className="text-xs text-neutral-600 tracking-tight">{publishedAt}</h2>
            </div>
            <div className="font-bold text-black tracking-tight  capitalize text-[22px]  mb-2">{title}</div>
            <div className="text-black text-md tracking-tight mb-2">{description.slice(0,100)+ "..."}</div>
            <div className="text-xs text-neutral-600">{`${Math.ceil(description.length/100)} minute(s) read`}</div>
            </div>
            
           <div className=" w-48">
             <img  className="h-full w-full object-contain p-3" src="./../../blogImg.png"></img>
           </div>

        </div>
        <div className="h-[1px] bg-neutral-300"></div>
        </Link>
        </>
    )
}

const Avatar = ({name}:{name:string}) =>{
    const initials = name?.toString().split(" ")[0][0].toUpperCase()
    return (
        <div className="flex items-center justify-center h-6 w-6 bg-gray-500 text-white rounded-full"><span className="text-white ">{initials}</span></div>
    )
}