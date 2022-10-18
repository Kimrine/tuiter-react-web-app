import NavigationSidebar from "../NavigationSidebar";
import PostList from "../PostList/PostList";
import PostSummaryList from "../PostSummaryList/PostSummaryList";

const HomeScreen = () => {
    return(
        <>
            <div className="row">
                {/*<div className="col-2 col-md-2 col-lg-1 col-xl-2">*/}
                {/*    <NavigationSidebar active="Home"/>*/}
                {/*</div>*/}
                <div className="">
                    <PostList/>
                </div>
                {/*<div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">*/}
                {/*    <PostSummaryList/>*/}
                {/*</div>*/}
            </div>
        </>
    );

};

export default HomeScreen;