import React from 'react';
import '../assets/css/filteroptions.css';

const FilterOptions = () => {
  return (
    <div className="filter-options">
      <h2>Filter Options</h2>
      <div className="filter-group">
        <h3>Tea Type</h3>
        <label><input type="checkbox" /> Black Tea</label>
        <label><input type="checkbox" /> Green Tea</label>
        <label><input type="checkbox" /> Herbal Tea</label>
      </div>
      <div className="filter-group">
        <h3>Price Range</h3>
        <label><input type="checkbox" /> Under $5</label>
        <label><input type="checkbox" /> $5 - $10</label>
        <label><input type="checkbox" /> Over $10</label>
      </div>
      <button className="apply-filters">Apply Filters</button>
    </div>
  );
};

export default FilterOptions;