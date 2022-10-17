import whos from "./whos.json";
import WhoToFollowListItem from "./WhoToFollowListItem";

const WhoToFollowList = () => {
    return(
        <ul className = "list-group wd-font">
            <li className = "list-group-item fw-bold override-bs1">Who to follow</li>
            {
                whos.map(who => {
                    return(<WhoToFollowListItem who={who}/>);
                })
            }
        </ul>
    );
}

export default WhoToFollowList;