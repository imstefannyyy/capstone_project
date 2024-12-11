import "./Search.css";

function Search({searchTerm, setSearchTerm}) {
    return (
        <div className="form-control w-50 align-items-center d-flex py-1" role="search">
            <i className="fas fa-search icon pe-2"></i>  
            <div className="d-flex flex-grow-1 flex-wrap gap-1">
                <input
                    type="text"
                    role="searchbox"
                    className="flex-grow-1 w-100 border-0"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
    )
}

export default Search;
