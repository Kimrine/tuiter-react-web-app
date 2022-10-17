import Nav from "../nav";
import PostList from "./PostList/PostList";
import {Routes, Route} from "react-router";
import ExploreComponent from "./ExploreScreen/ExploreComponent";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowList from "./WhoToFollowList";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../vendors/fontawesome/css/all.css';
import '../vendors/bootstrap/css/bootstrap.min.css';

import './index.css';

function Tuiter() {
    return(
        <div className="bg-black">
            <Nav/>
            <h1>Tuiter</h1>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar/>
                </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                     style={{"position": "relative"}}>
                    <Routes>
                        <Route path="/" element={<PostList/>}/>
                        <Route path="home"    element={<PostList/>}/>
                        <Route path="explore" element={<ExploreComponent/>}/>
                    </Routes>
                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </div>
    );
}
export default Tuiter