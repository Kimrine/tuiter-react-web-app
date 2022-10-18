import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import WhoToFollowList from "../WhoToFollowList";
import ExploreComponent from "../ExploreScreen/ExploreComponent.js";

const ExploreScreen = () => {
    return(
        <>
            <div className="row">
                {/*<div className="col-2 col-md-2 col-lg-1 col-xl-2">*/}
                {/*    <NavigationSidebar active="Explore"/>*/}

                {/*</div>*/}
                <div>
                    <ExploreComponent/>
                </div>
                {/*<div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">*/}
                {/*    <WhoToFollowList/>*/}
                {/*</div>*/}
            </div>
        </>
    );
}


export default ExploreScreen;