import Post from "@/app/ui/Post";
import {getPosts} from "@/app/lib/actions";
import {Suspense} from "react";

const Feed = async () => {
    const feed = await getPosts();

    return <main>
        {feed.map((post) => (
            <div key={post.id} className="post">
                <Post post={post}/>
            </div>
        ))}
    </main>;
}

export default Feed;