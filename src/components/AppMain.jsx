import PostCard from "./PostCard/PostCard"
import posts from "../data/posts"

export default function AppMain() {

    const allTags = posts.flatMap(post => post.tags)
    const uniqueTags = [...new Set(allTags)]

    return (

        <main>
            <div>
                {posts.map(post => post.published && <PostCard title={post.title} content={post.content} img="https://placehold.co/600x400" tags={post.tags} key={post.id} />)}
            </div>

            <ul className="tags-list">
                <h2>Tags</h2>
                {uniqueTags.map((tag, index) => <li key={index}>{tag}</li>)}
            </ul>

        </main>
    )

}