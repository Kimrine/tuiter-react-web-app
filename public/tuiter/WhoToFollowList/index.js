import whos from "./whos.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return(`
        <ul class="list-group wd-font">
            <li class="list-group-item fw-bold override-bs1">Who to follow</li>
            ${
                whos.map(who => {
                    return(WhoToFollowListItem(who));
                }).join('')
            }
        </ul>
    `);
}

export default WhoToFollowList;