import React from 'react';

const Pagination = (props) => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(props.totalItems / props.itemsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <>
            <div className="pages">
                {pageNumbers.map(number => {
                    return (
                        <button onClick={() => props.pageSelected(number)} to="/Movie" className="page_link">
                           {number}
                        </button>
                    )
                })}
            </div>
        </>
    )
};

export default Pagination;