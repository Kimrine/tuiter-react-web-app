import PostListItem from "./PostListItem.js";
import posts from "./posts.js";

const PostList = () => {
    return(`
        <div class="list-group wd-post-list">
            ${posts.map(post => {
                return(PostListItem(post));    
            }).join('')
        }
        </div>
    `);
}

export default PostList;