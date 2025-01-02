import Post from "~/components/post"
import { posts as postData } from "~/mock/posts"
import { VList } from "virtua";
import { useState } from "react";

export default function ForYou() {

    const [posts, setPosts] = useState([...postData, ...postData, ...postData, ...postData, ...postData,])

    return (
        <>
            {posts.map(post => <Post post={post} key={post.id} />)}
        </>
    )
}