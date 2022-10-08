import PostSummaryListItem from "./PostSummaryListItem.js";
import posts from "../ExploreScreen/posts.js";

const PostSummaryList = () => {
    return(`
        <ul class="list-group mb-3">
            ${
                posts.map(post => {
                    return(PostSummaryListItem(post));
                }).join('')
            }
        </ul>
    `);

}

export default PostSummaryList;