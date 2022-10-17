import React from "react";
import links from "./links.json";
import NavItem from "./NavItem";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <>
            <div className="list-group wd-font">
                <Link to="/HomeScreen/index"
                      className="list-group-item override-bs list-group-item-action">
                    <i className="fab fa-twitter fa-lg"/>
                </Link>
                {links.map(link => {
                    return (<NavItem link={link} active={active}/>);
                })
                }
            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
        </>

    );
}
export default NavigationSidebar;