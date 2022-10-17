const WhoToFollowListItem = (
    {
        who ={
            avatarIcon: 'https://pbs.twimg.com/profile_images/1321163587679784960/0ZxKlEKB_400x400.jpg',
            userName: 'NASA',
            handle: 'NASA',
        }
    }) => {
    return(
        <li className="list-group-item override-bs1">
            <div className="wd-container-bm">
                <div className="wd-container-left d-flex justify-content-between">
                    <div className="me-3">
                        <img className="wd-avator" src={who.avatarIcon}/>
                    </div>
                    <div>
                        <span className="fw-bold">{who.userName} <i
                            className="fa fa-check-circle fa-fw"/></span><br/>
                        <span className="wd-username">@{who.handle}</span>
                    </div>
                </div>
                <div>
                    <a href="#"
                       className="btn btn-md bg-primary rounded-pill w-80 text-white">Follow</a>
                </div>
            </div>
        </li>
    )
};

export default WhoToFollowListItem;