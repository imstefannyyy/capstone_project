function Pagination({ currentPage, totalPages, handleNextPage, handlePrevPage }) {
    return (
        <>
            <div className="w-25 d-flex justify-content-end align-items-center">
                <button onClick={handlePrevPage} disabled={currentPage === 1} className="btn btn-outline-light me-lg-3">
                    <i className="fas fa-chevron-left"></i>
                </button>
                <span className="text-light d-md-flex d-none">
                    {currentPage} / {totalPages}
                </span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages} className="btn btn-outline-light ms-lg-3 ms-1">
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
        </>
    );
}

export default Pagination;
