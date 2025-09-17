import Navbar from "@/app/compenent/Navbar";
import BlogCard from "./components/BlogCard";

interface BlogProp {
    params: { id: string, title: string };
}

export default function BlogDetail({params}: BlogProp) {
    return (
        <>
        <Navbar></Navbar>
        <div className="m-10 flex justify-center">
            <BlogCard title={`ini adalah title dengan ID : ${params.id}`} description={`Ini adalah titlenya : ${params.title}`}/>
        </div>
        </>
    );
}
