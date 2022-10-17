import {Link} from "react-router-dom";

const NavItem = ({
                     link = {
                         label: 'explore',
                         icon: 'fa-hashtag',
                         href: 'explore.html',
                         path: '/tuiter/explore',
                     },active
                 }) => {
    return(
        <Link to={link.path} className={`list-group-item override-bs text-decoration-none list-group-item-action ${active.toUpperCase()===link.label.toUpperCase()?'active':''}`}>
            <i className={link.icon}/>
            <span className="mx-2 d-none d-xl-inline-block">{link.label}</span>
        </Link>
    )
}

export default NavItem;