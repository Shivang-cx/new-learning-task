import logo from "./img/Logo.png"
function Header() {
    return (
      <header className="header-wrapper container mx-auto">
        <div className="flex justify-between">
        <div className="logo-wrapper">
           <img src={logo} />
        </div>
        <div className="menu-wrapper flex">
            <ul className="nav-menu flex">
                <li className="nav-menu-item">
                    <a href="" className="nav-menu-link mr-4">Home</a>
                </li>
                <li className="nav-menu-item">
                    <a href="" className="nav-menu-link mr-4">Artwork</a>
                </li>
                <li className="nav-menu-item">
                    <a href="" className="nav-menu-link mr-4">Roadmap</a>
                </li>
                <li className="nav-menu-item">
                    <a href="" className="nav-menu-link mr-4">FAQ</a>
                </li>
                <li className="nav-menu-item">
                    <a href="" className="nav-menu-link mr-4">Team</a>
                </li>
            </ul>
        </div>
        </div>
      </header>
    );
  }
  
  export default Header;