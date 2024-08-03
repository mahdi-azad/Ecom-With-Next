import Link from "next/link";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Header = () => {
  
  return (
    <header id="header">
      <div className="main_nav_container">
        <nav className="main_nav">
          <div className="main_container">
            <div className="logo">
              <i
                onClick={() => setUserDrawerOpen(true)}
                className="fas fa-bars mr-3"
              ></i>
              <Link href="/">
                <img src="/logo.png"></img>
              </Link>
              {/* <i onClick = {() => setUserDrawerOpen(true)} className="" */}
            </div>

            <Search />
            <div className="header_info">
              <span></span>
              <UserMenu></UserMenu>
            </div>
          </div>
        </nav>

        <nav className="bottom_nav">
          <div className="main_container">
            <div className="categories">
              <i
                onClick={() => setUserDrawerOpen(true)}
                className="fas fa-bars"
              ></i>
              <div className="cat_menu_hover">
                <span className="mr-2">Categories</span>
                <i className="fas fa-arrow-down"></i>
              </div>
            </div>

            <div className="pages_list">
              <li>Campaign</li>
              <li>Brands</li>
              <li>Categories</li>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
