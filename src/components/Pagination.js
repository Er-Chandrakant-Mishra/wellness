// src/components/Pagination.js
import React from 'react';
import { observer } from 'mobx-react';
import retreatStore from '../store/RetreateStore';
import '../style/Pagination.css';
const Pagination = observer(() => {
  const { currentPage, totalPages, goToPage } = retreatStore;

  const handlePageChange = (page) => {
    retreatStore.goToPage(page);
  };

  return (
    <div className="pagination">
    <button 
      onClick={() => handlePageChange(currentPage - 1)} 
      disabled={currentPage === 1}
    >
      Previous
    </button>
    <span>Page {currentPage} of {totalPages}</span>
    <button 
      onClick={() => handlePageChange(currentPage + 1)} 
      disabled={currentPage === totalPages}
    >
      Next
    </button>
  </div>
  );
});

export default Pagination;
