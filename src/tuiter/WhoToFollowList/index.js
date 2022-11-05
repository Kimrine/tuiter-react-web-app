import {useSelector} from "react-redux";
import WhoToFollowListItem from "./WhoToFollowListItem";

const WhoToFollowList = () => {
    const whoArray = useSelector(
        (state) => state.who);
    return(
        <ul className = "list-group wd-font">
            <li className = "list-group-item fw-bold override-bs1">Who to follow</li>
            {
                whoArray.map(who => {
                    return(<WhoToFollowListItem who={who}/>);
                })
            }
        </ul>
    );
}

export default WhoToFollowList;