const PostListItem = ({author, description, imageSrc, link, timeStamp, interactionsCount}) => {
    return(`
        <div class="list-group-item override-bs2 wd-post-item d-flex">
            <img
                src = "${author.profileImgSrc}"
                class = "wd-post-profileImg"
            />
            <div>
                <div>
                    <div class="wd-post-handle">
                       <span class="wd-post-author">${author.name}</span>
                       <span>@${author.handle}</span>
                       ${timeStamp ? `<span>&nbsp•&nbsp${timeStamp}</span>` : ''}
                    </div>
                    <p class="wd-post-description">${description}</p>
                </div>
                 ${link ? (`
                     <div class="wd-post-link">
                        <img 
                          src="${link.previewImageSrc}" 
                          class="wd-post-image wd-post-link-image"  
                        />
                        <div class="wd-post-link-text">
                          <span class="wd-post-link-title">${link.previewTitle}</span><br/>
                          <span class="wd-post-description mt-1">${link.previewDescription}</span><br/>
                          <span>
                            <a href="https://${link.baseUrl}" class="text-decoration-none" target="_blank">🔗${link.baseUrl}</a>
                          </span>
                        </div>
                     </div>
                 `) : ''}
                ${imageSrc ? (`
                  <img 
                    src="${imageSrc}" 
                    class="wd-post-image"  
                  />
                `) : ''}
                <div class="d-flex justify-content-between wd-post-interactions">
                    <div>
                        <i class="fa fa-comment"></i>
                        ${interactionsCount.comments}
                    </div>
                    <div>
                        <i class="fa fa-sync"></i>
                        ${interactionsCount.retweets}
                    </div>
                    <div>
                        <i class="far fa-heart"></i>
                        ${interactionsCount.likes}
                    </div>
                    <div>
                        <i class="far fa-share-square"></i>
                    </div>
                </div>
            </div>                 
        </div>
    `);
}

export default PostListItem;