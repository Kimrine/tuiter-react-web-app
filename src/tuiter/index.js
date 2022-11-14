import Nav from "../nav";
import {Routes, Route} from "react-router";
import ExploreComponent from "./ExploreScreen/ExploreComponent";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowList from "./WhoToFollowList";
import HomeScreen from "./home-screen";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../vendors/fontawesome/css/all.css';
import '../vendors/bootstrap/css/bootstrap.min.css';
import '../vendors/bootstrap/bootstrap.min.css';
import './index.css';
import ExploreScreen from "./ExploreScreen";
import whoReducer
    from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import profileReducer from "./reducers/profile-reducer";
import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import ProfileScreen from "./ProfileComponent";
const store = configureStore(
    {reducer: {who: whoReducer, tuitsData: tuitsReducer, profile: profileReducer}});

function Tuiter() {
    return(
        <Provider store={store}>
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
                            <Route path="/" element={<HomeScreen/>}/>
                            <Route path="home"    element={<HomeScreen/>}/>
                            <Route path="explore" element={<ExploreScreen/>}/>
                            <Route path="profile" element={<ProfileScreen/>}/>
                        </Routes>
                    </div>
                    <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                        <WhoToFollowList/>
                    </div>
                </div>
            </div>
        </Provider>
    );
}

export default Tuiter;