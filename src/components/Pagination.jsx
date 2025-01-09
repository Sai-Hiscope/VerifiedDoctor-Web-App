import React from 'react';

const Pagination = ({ page, setPage }) => {
  return (
    <div className="pagination">
      <button
        onClick={() => setPage((prev) => prev - 1)}
        disabled={page === 0}
        className={page === 0 ? 'disabled' : ''}
      >
        Prev
      </button>
      <button
        onClick={() => setPage((prev) => prev + 1)}
        disabled={page === 3}
        className={page === 3 ? 'disabled' : ''}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
