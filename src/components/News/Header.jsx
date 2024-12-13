import Pagination from "../utils/Pagination";
import Search from "../utils/Search";

function Header({search, pagination}) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid mx-lg-4 d-flex justify-content-between">
                <div className="w-25"></div>
                <Search {...search} />
                <Pagination {...pagination} />   
            </div>
        </nav>
    )
}

export default Header;
