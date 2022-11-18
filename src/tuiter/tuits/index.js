import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TuitListItem from "./tuit-list-item";
import {findTuitsThunk}
    from "../../services/tuits-thunks";

const TuitsList = () => {
    const {tuits, loading} = useSelector(state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(findTuitsThunk())
    },[]);
    return(
        <div className="list-group wd-post-list mb-4">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                !loading && tuits.map && tuits.map(tuit =>
                    <TuitListItem key={tuit._id} tuit={tuit}/>)
            }
        </div>
    );
}

export default TuitsList;