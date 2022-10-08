const PostSummaryListItem = (post) => {
    return(`
        <li class="wd-container list-group-item override-bs">
            <div class="wd-post-font">
                <span class="wd-post-topic">${post.topic}</span><br/>
                <span class="fw-bold">${post.userName}</span> <span class="fa fa-circle"></span><span class="wd-post-time"> - ${post.time}</span>
                <p class="fw-bold">${post.title}</p>
            </div>
            <div class="ms-3">
                <img class="wd-post-img" src=${post.image} />
            </div>
        </li>
    `);
}

export default PostSummaryListItem;