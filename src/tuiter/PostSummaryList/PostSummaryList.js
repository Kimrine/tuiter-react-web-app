import PostSummaryListItem from "./PostSummaryListItem";
import posts from "./posts.json";

const PostSummaryList = () => {
    return(
        <ul className="list-group mb-3">
            {
                posts.map(post => {
                    return(<PostSummaryListItem post={post}/>);
                })
            }
        </ul>
    );

}

export default PostSummaryList;