import ShowPost from "./ShowPost";
import ShowPic from "./ShowPic";

const PostListItem = ({
                          post = {
                              author: {
                                  name: 'Elon Musk',
                                  handle: '@elonmusk',
                                  profileImgSrc: 'https://cdn.mos.cms.futurecdn.net/J2NTP9Er4Ad3kRsms7XRoD.jpeg'

                              },
                              timeStamp: '2h',
                              description: 'Amazing show about @inspiration4x mission!',
                              link: {
                                  previewImageSrc: 'https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABSTVj5DHrlahOykYCHrcwL63gTkGzcXodPQgvrJXFqQMFg4Ktgtxmh_fGFJbsMF9BwmIbdW4L17YdJejrxJNwqyEnAP-.jpg?r=3d5',
                                  previewTitle: 'Countdown: Inspiration4 Mission to Space | Netflix Official Site',
                                  previewDescription: 'From training to launch to landing, this all-access docuseries rides along with the inspiration4 crew on the first all-vicilian orbital space ...',
                                  baseUrl: 'netflix.com'
                              },
                              imageSrc:'',
                              interactionsCount: {
                                  comments: '4.2K',
                                  retweets: '3.5K',
                                  likes: '37.5K'
                              }
                          }
                      }
) => {
    return(
        <div className="list-group-item override-bs2 wd-post-item d-flex">
            <img
                src = {post.author.profileImgSrc}
                className = "wd-post-profileImg"
            />
            <div>
                <div>
                    <div className="wd-post-handle">
                        <span className="wd-post-author">{post.author.name}</span>
                        <span>@{post.author.handle}</span>
                        {`${post.timeStamp ? " · " + post.timeStamp : ""}`}
                    </div>
                    <p className="wd-post-description">{post.description}</p>
                </div>
                <ShowPost link={post.link}/>
                <ShowPic pic={post.imageSrc}/>
                <div className="d-flex justify-content-between wd-post-interactions">
                    <div>
                        <i className="fa fa-comment"/>
                        {post.interactionsCount.comments}
                    </div>
                    <div>
                        <i className="fa fa-sync"/>
                        {post.interactionsCount.retweets}
                    </div>
                    <div>
                        <i className="far fa-heart"/>
                        {post.interactionsCount.likes}
                    </div>
                    <div>
                        <i className="far fa-share-square"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostListItem;