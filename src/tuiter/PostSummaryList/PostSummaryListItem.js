const PostSummaryListItem = ({
                                 post = {
                                     "topic": "Web Development",
                                     "userName": "ReactJS",
                                     "time": "2h",
                                     "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                                     "image": "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-black-and-white.png"

                                 }
                             }) => {
    return(
        <li className="wd-container list-group-item override-bs d-flex justify-content-between">
            <div className="wd-post-font">
                <span className="wd-post-topic">{post.topic}</span><br/>
                <span className="fw-bold">{post.userName}</span> <i className="fa fa-circle"/><span className="wd-post-time"> - {post.time}</span>
                <p className="fw-bold">{post.title}</p>
            </div>
            <div className="ms-3">
                <img className="wd-post-img" src={post.image} />
            </div>
        </li>
    );
}

export default PostSummaryListItem;