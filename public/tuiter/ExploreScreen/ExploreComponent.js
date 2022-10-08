import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return(`
           <div class="row">
                <div class="wd-search position-relative col-11">
                    <i class="fas fa-search position-absolute" style="color: rgb(110,118,125)"></i>
                    <input
                        class="bg-dark border-0 form-control form-control-lg rounded-pill ps-5 text-white"
                        placeholder="Search Tuiter">
                </div>
                <div class="position-relative col-1 wd-middle">
                    <a href="explore-settings.html"><i
                        class="fas fa-cog fa-stack-2x"style="color: whitesmoke"></i>
                    </a>
                </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="#">For you</a>
                </li>
                <li class="nav-item wd-font-bold">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item wd-font-bold">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item wd-font-bold">
                    <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item wd-font-bold">
                    <a class="nav-link" href="#">Entertainment</a>
                </li>
           </ul>
           <!-- image with overlaid text -->
            <div class="card override-bs text-white position-relative mb-2">
                <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg"
                    class="card-img override-bs">
                <span class="fa-2x text-white fw-bold wd-tuit-image-overlay position-absolute">SpaceX's Starship</span>
            </div>
            
            ${PostSummaryList()}
    `);
}
export default ExploreComponent;
