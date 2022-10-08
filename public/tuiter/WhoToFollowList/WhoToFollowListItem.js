const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item override-bs1">
            <div class="wd-container-bm">
                <div class="wd-container-left">
                    <div class="me-3">
                        <img class="wd-avator" src=${who.avatarIcon}>
                    </div>
                    <div>
                        <span class="fw-bold">${who.userName} <i class="fa fa-check-circle fa-fw"></i></span><br/>
                        <span class="wd-username">@${who.handle}</span>
                    </div>
               </div>
               <div>
                <a href="#"
                    class="btn btn-md bg-primary rounded-pill w-80 text-white">Follow</a>
                </div>
            </div>
        </li>
    `)
};

export default WhoToFollowListItem;