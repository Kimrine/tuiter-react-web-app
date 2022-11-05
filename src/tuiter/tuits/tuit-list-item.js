import TuitStats from "./tuit-stats";
import ShowPic from "./ShowPic";
import {useDispatch} from "react-redux";
import {deleteTuit}
    from "../reducers/tuits-reducer";

const TuitListItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuitClickHandler = (id) => {
        dispatch(deleteTuit(id));
    };

    return(
        <>
            <div className="list-group-item override-bs2 wd-post-item d-flex">
                <img
                    src = {tuit.author.profileImgSrc}
                    className = "wd-post-profileImg"
                />
                <div>
                    <div>
                        <div className="wd-post-handle">
                            <i  onClick={() =>
                                deleteTuitClickHandler(tuit._id)}
                               className="fas fa-times fa-pull-right wd-color-gray"/>
                            <span className="wd-post-author">{tuit.author.name}</span>
                            <span>  @{tuit.author.handle}</span>
                            {`${tuit.timeStamp ? " · " + tuit.timeStamp : ""}`}
                        </div>
                        <p className="wd-post-description">{tuit.description}</p>
                    </div>
                    {tuit.attachments && tuit.attachments.image &&
                     <ShowPic pic={tuit.attachments.image}/>
                    }
                    {tuit.attachments && tuit.attachments.video &&
                     <iframe width="100%" height="350px"
                             className="video-responsive"
                             src={`https://www.youtube.com/embed/${tuit.attachments.video}`}
                             allowFullScreen/>
                    }
                    <TuitStats tuit={tuit}/>
                </div>
            </div>
        </>

    );
}

export default TuitListItem;