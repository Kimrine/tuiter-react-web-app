import pages from "./pages.js";

const NavItem = (page, activePage) => {
    return(`
        <a class="list-group-item override-bs text-decoration-none list-group-item-action ${activePage===page.title?'active':''}" href="${page.href}">
           <i class="${page.iconClasses}"></i>
           <span class="d-none d-xl-inline-block">${page.title}</span>
        </a>
    `)
}

const NavigationSidebar = (activePage) => {
    return (`
   <div class="list-group wd-font">
     <a class="list-group-item override-bs" href="/">
       <i class="fab fa-twitter"></i></a>
     ${pages.map(page => {
         return (NavItem(page, activePage));
     }).join('')
    }
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;