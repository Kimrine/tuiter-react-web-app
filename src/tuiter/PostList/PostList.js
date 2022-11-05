import PostListItem from "./PostListItem";
import {useSelector} from "react-redux";

const PostList = () => {
    const postsArray = useSelector(state => state.tuits)
    return(
        <div class="list-group wd-post-list mb-4">
            {postsArray.map(post => {
                return(<PostListItem key={post._id} post={post}/>);
            })
            }
        </div>
    );
}

export default PostList;