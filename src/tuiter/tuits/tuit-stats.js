import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();

    const likeTuit = (tuit) => {
        if(tuit.liked===true){
            dispatch(updateTuitThunk({
                                         ...tuit,
                                         liked: false,
                                         likes: tuit.likes - 1
                                     }))
        }else{
            dispatch(updateTuitThunk({
                                         ...tuit,
                                         liked: true,
                                         likes: tuit.likes + 1
                                     }))
        }
    }

    const dislikeTuit = (tuit) => {
        if(tuit.disliked===true){
            dispatch(updateTuitThunk({
                                         ...tuit,
                                         disliked: false,
                                         dislikes: tuit.dislikes - 1
                                     }))
        }else{
            dispatch(updateTuitThunk({
                                         ...tuit,
                                         disliked: true,
                                         dislikes: tuit.dislikes + 1
                                     }))
        }
    }

    return (
        <div className="wd-color-gray row mt-3">
            <span className="col">
                <i className="far fa-comment me-2"/>
                {tuit.stats && tuit.stats.comments}
            </span>
            <span className="col">
                <i className="fas fa-retweet me-2"/>
                {tuit.stats && tuit.stats.retuits}
            </span>
            <span onClick={() => likeTuit(tuit)} className="col">
                {
                    tuit.liked &&
                    <span className="wd-color-red">
                        <i className="fas fa-heart me-2"/>
                        {tuit.likes}
                    </span>
                }
                {
                    !tuit.liked &&
                    <span>
                        <i className="far fa-heart me-2"/>
                        {tuit.likes}
                    </span>
                }
            </span>
            <span onClick={() => dislikeTuit(tuit)} className="col">
                {
                    tuit.disliked &&
                    <span className="wd-color-red">
                        <i className="fas fa-thumbs-down me-2"/>
                        {tuit.dislikes}
                    </span>
                }
                {
                    !tuit.disliked &&
                    <span>
                        <i className="far fa-thumbs-down me-2"/>
                        {tuit.dislikes}
                    </span>
                }
            </span>
            <span className="col">
                <i className="fas fa-external-link-alt me-2"/>
            </span>
        </div>
    );
}

export default TuitStats;