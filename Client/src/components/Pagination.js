import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

function Pagination({ page, setPage, totalPages }) {
    const [pageNumbers, setPageNumbers] = useState([]);

    useEffect(() => {
        if (page < 3) {
            setPageNumbers([1, 2, 3, 4]);
        } else if (page > totalPages - 2) {
            setPageNumbers([
                totalPages - 3,
                totalPages - 2,
                totalPages - 1,
                totalPages,
            ]);
        } else {
            setPageNumbers([page - 2, page - 1, page, page + 1, page + 2]);
        }
    }, [page, totalPages]);

    return (
        <>
            {page !== 1 && (
                <li className="page-item">
                    <button
                        onClick={() => setPage(page - 1)}
                        className="page-link"
                    >
                        Previous
                    </button>
                </li>
            )}

            {pageNumbers.map((ind) => {
                return (
                    <li
                        className={
                            "page-item " + (page === ind ? "active" : "")
                        }
                        key={nanoid()}
                    >
                        <button
                            onClick={() => setPage(ind)}
                            className="page-link"
                        >
                            {ind}
                        </button>
                    </li>
                );
            })}

            {page !== totalPages && (
                <li className="page-item">
                    <button
                        onClick={() => setPage(page + 1)}
                        className="page-link"
                    >
                        Next
                    </button>
                </li>
            )}
        </>
    );
}

export default Pagination;
