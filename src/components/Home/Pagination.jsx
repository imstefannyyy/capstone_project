function Pagination({ currentPage, setCurrentPage, totalPages, countriesPerPage, handleCountriesPerPageChange, handleNextPage, handlePrevPage }) {
    return (
        <>
            <div className="w-25 d-flex justify-content-end align-items-center">
                <button onClick={handlePrevPage} disabled={currentPage === 1} className="btn btn-outline-light me-3">
                    <i className="fas fa-chevron-left"></i>
                </button>
                <span className="text-light d-flex">
                    {/* <input
                        type="number"
                        className=""
                        value={currentPage}
                        onChange={(e) => setCurrentPage(e.target.value)}
                    /> */}
                    {currentPage} / {totalPages}
                    {/* <input type="number" value={countriesPerPage} onChange={handleCountriesPerPageChange} min={1}/> */}
                </span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages} className="btn btn-outline-light ms-3">
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
        </>
    );
}

export default Pagination;
