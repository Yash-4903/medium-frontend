
export const Skeleton = () =>{
    return (<>
        
<div role="status" className="w-full mx-auto mt-5 animate-pulse ">
    <div className="flex items-center gap-5">
        <div className="h-6 bg-neutral-300 rounded-full w-6 mb-2.5"></div>
        <div className="h-2 bg-neutral-300 rounded-full w-48 mb-2.5"></div>
    </div>
    <div className="h-2.5 bg-neutral-300 rounded-full w-72 mb-4"></div>
    <div className="h-2 bg-neutral-300 rounded-full max-w-[360px] mb-4"></div>
    <div className="h-2 bg-neutral-300 rounded-full w-48 mb-2.5"></div>
    
    <span className="sr-only">Loading...</span>
</div>


</>
    )
        

}