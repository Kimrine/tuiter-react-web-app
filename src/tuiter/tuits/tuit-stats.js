import React from "react";
import {useDispatch} from "react-redux";
import {likeTuit}
    from "../reducers/tuits-reducer";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuitClickHandler = (id) => {
        dispatch(likeTuit(id));
    };

    return (
        <div className="wd-color-gray row mt-3">
            <span className="col">
                <i className="far fa-comment me-2"/>
                {tuit.interactionsCount && tuit.interactionsCount.replies}
            </span>
            <span className="col">
                <i className="fas fa-retweet me-2"/>
                {tuit.interactionsCount && tuit.interactionsCount.retuits}
            </span>
            <span onClick={() =>
                likeTuitClickHandler(tuit._id)} className="col">
                {
                    tuit.liked &&
                    <span className="wd-color-red">
                        <i className="fas fa-heart me-2"/>
                        {tuit.interactionsCount && tuit.interactionsCount.likes}
                    </span>
                }
                {
                    !tuit.liked &&
                    <span>
                        <i className="far fa-heart me-2"/>
                        {tuit.interactionsCount && tuit.interactionsCount.likes}
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