// import React from "react";
// import appwriteService from "../appwrite/config"

// import { Link } from "react-router-dom";

// function PostCard({$id,title, featuredImage}){
//     return(
//        <Link to={`/post/${$id}`}>
//         <div className="w-full bg-gray-100 rounded-xl p-4">
//             <div className="w-full justify-center mb-4">
//                 <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
//                 className="text-xl font-bold"
//                 />

//             </div>
//             <h2>{title}</h2>
//         </div>
//        </Link>
//     )
// }

// export default React.forwardRef(PostCard)


import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

// Define the component inside forwardRef and accept 'ref' as the second argument
const PostCard = React.forwardRef(function PostCard({post }, ref) {
    if (!post) return null;
    return (
        // Attach the ref to the top-level element you want to reference
        <Link to={`/post/${post.$id}`} ref={ref}> 
            <div className="w-full bg-gray-100 rounded-xl p-4">
                <div className="w-full justify-center mb-4">
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl"
                    />
                </div>
                <h2 className="text-xl font-bold">{post.title}</h2>
            </div>
        </Link>
    );
});

export default PostCard;