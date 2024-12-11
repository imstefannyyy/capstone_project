import Search from "../utils/Search";

function Header({ search }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid mx-lg-4 d-flex justify-content-center">
                <Search {...search} />
            </div>
        </nav>
    )
}

export default Header;
