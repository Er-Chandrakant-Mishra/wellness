import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import RetreatList from './components/RetreatList';
import RetreatDetail from './components/RetreaDetails'; 
import retreatStore from './store/RetreateStore';
import FilterBar from './components/FilterBar';
// import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';
import './style/main.css';
import Footer from './components/Footer';

const App = () => {
  useEffect(() => {
    retreatStore.fetchRetreats();
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <FilterBar />
        {/* <SearchBar /> */}
        <Routes>
          <Route path="/" element={<RetreatList retreats={retreatStore.filteredRetreats} />} />
          <Route path="/retreat/:id" element={<RetreatDetail />} />
        </Routes>
        <Pagination
          currentPage={1} 
          totalPages={5} 
          onPageChange={(page) => console.log('Page change:', page)} 
        />
      </div>
      <Footer />
    </Router>
  );
};

export default App;

