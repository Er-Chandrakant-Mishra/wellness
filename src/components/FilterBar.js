import React from 'react';
import retreatStore from '../store/RetreateStore';

const FilterBar = () => {
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    retreatStore.filterRetreats(name, value);
  };

  return (
    <div className="filter-bar">
      <label>
        Type:
        <select name="type" onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="Yoga">Yoga</option>
          <option value="Meditation">Meditation</option>
          <option value="Detox">Detox</option>
        </select>
      </label>
      <label>
        Date:
        <input type="date" name="date" onChange={handleFilterChange} />
      </label>
    </div>
  );
};

export default FilterBar;
