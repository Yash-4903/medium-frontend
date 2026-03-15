import { BlogCard } from "../components/BlogCrad"
import { NavBar } from "../components/NavBar"
import { Skeleton } from "../components/Skeleton";
import { useBlogs } from "../hooks"

export const Blogs = () =>{
    const {loading, blogs} = useBlogs();

    if(loading){
        return(
            <div>
                <NavBar/>
                <div className="max-w-2xl flex flex-col mx-auto">
                <div className="flex gap-5 mb-5 mt-3">
                    <div className="text-neutral-600 font-medium text-lg">+</div>
                    <div className="text-neutral-600 font-medium text-lg">For you</div>
                </div>
                <div className="h-[1px] bg-neutral-500 mb-1"></div>
               <Skeleton/>
               <Skeleton/>
               <Skeleton/>
               <Skeleton/>
               <Skeleton/>
               <Skeleton/>
               
            </div>
            </div>
        )
    }
  
    return (
        <div className="">
            <NavBar/>
            <div className="max-w-2xl flex flex-col mx-auto">
                <div className="flex gap-5 mb-5 mt-3">
                    <div className="text-neutral-600 font-medium text-lg">+</div>
                    <div className="text-neutral-600 font-medium text-lg">For you</div>
                </div>
                <div className="h-[1px] bg-neutral-500 mb-1"></div>
                {blogs.map(blog => <BlogCard id={blog.id} name={blog.author.name} publishedAt={(blog.publishedAt).slice(0,10)} title={blog.title} description={blog.content}/>
                )}
            </div>
        </div>)
}