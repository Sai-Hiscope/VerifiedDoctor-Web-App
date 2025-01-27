import React from 'react';

const Pagination = ({ page, setPage, handleSubmit }) => {
  const isLastPage = page === 3; // Adjust this according to the number of pages.

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
        onClick={isLastPage ? handleSubmit : () => setPage((prev) => prev + 1)}
        className={isLastPage ? 'insurancepage-submit-button' : ''}
      >
        {isLastPage ? 'Submit' : 'Next'}
      </button>
    </div>
  );
};

export default Pagination;
