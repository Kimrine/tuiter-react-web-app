import PostSummaryList from "../PostSummaryList/PostSummaryList";

const ExploreComponent = () => {
    return(
        <>
            <div className="row">
                <div className="wd-search position-relative col-11">
                    <i className="fas fa-search position-absolute"/>
                    <input
                        className="bg-dark border-0 form-control form-control-lg rounded-pill ps-5 text-white"
                        placeholder="Search Tuiter"/>
                </div>
                <div className="position-relative col-1 wd-middle">
                    <a href="explore-settings.html"><i
                        className="fas fa-cog fa-stack-2x wd-cog-color"/>
                    </a>
                </div>
            </div>
            <ul className="nav mt-3 mb-2 nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" href="#">For you</a>
                </li>
                <li className="nav-item wd-font-bold">
                    <a className="nav-link" href="#">Trending</a>
                </li>
                <li className="nav-item wd-font-bold">
                    <a className="nav-link" href="#">News</a>
                </li>
                <li className="nav-item wd-font-bold">
                    <a className="nav-link" href="#">Sports</a>
                </li>
                <li className="nav-item wd-font-bold d-none d-md-block">
                    <a className="nav-link" href="#">Entertainment</a>
                </li>
            </ul>

            <div className="card override-bs text-white position-relative mb-2">
                <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg"
                     className="card-img override-bs"/>
                <span className="fa-2x text-white fw-bold wd-tuit-image-overlay position-absolute">SpaceX's Starship</span>
            </div>

            <PostSummaryList/>
        </>
    );
}
export default ExploreComponent;