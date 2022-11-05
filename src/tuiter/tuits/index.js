import TuitListItem from "./tuit-list-item";
import {useSelector} from "react-redux";

const TuitsList = () => {
    const tuits = useSelector(state => state.tuits)
    return(
        <div className="list-group wd-post-list mb-4">
            {
                tuits.map && tuits.map(tuit =>
                    <TuitListItem key={tuit._id} tuit={tuit}/>)
            }
        </div>
    );
}

export default TuitsList;