const ShowPost = ({
                      link = {
                          previewImageSrc: '',
                          previewTitle:'',
                          previewDescription:'',
                          baseUrl:''
                      }
                  }) => {
    if(link.previewImageSrc===''){
        return(<div> </div>);
    }else {
        return(<div className="wd-post-link">
                <img
                    src={link.previewImageSrc}
                    className="wd-post-image wd-post-link-image"
                />
                <div className="wd-post-link-text">
                    <span className="wd-post-link-title">{link.previewTitle}</span><br/>
                    <span className="wd-post-description mt-1">{link.previewDescription}</span><br/>
                    <span>
                    <a href="https://${link.baseUrl}" className="text-decoration-none"
                       target="_blank">🔗{link.baseUrl}</a>
                </span>
                </div>
            </div>
        )
    }
};

export default ShowPost;