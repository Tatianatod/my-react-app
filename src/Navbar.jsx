// add styles
export function Navbar() {
    return(
        <nav className="navbar">
            <ul>
                <li className="nav-item">
                    <a href="#"><li className="nav-item"></li>Dashboard</a>
                </li>
                 <li className="nav-item">
                    <a href="#"><li className="nav-item"></li>Widgets</a>
                </li>
                <li className="nav-item">
                    <button aria-expanded="false">Apps</button>
                    <ul className="sub-menu"aria-label="Apps">
                        <li className="sub-menu"><a href="#">Calendar</a>
                        </li>
                        <li className="sub-menu"><a href="#">Chat</a>
                        </li>
                        <li className="sub-menu"><a href="#">Email</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    ) 
}