import PostListItem from "./PostListItem";
import posts from "./posts.json";

const PostList = () => {
    return(
        <div class="list-group wd-post-list mb-4">
            {posts.map(post => {
                return(<PostListItem post={post}/>);
            })
            }
        </div>
    );
}

export default PostList;