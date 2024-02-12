import React from 'react';

const SidebarComponent = ({ filters, onSelectFilter }) => {
  return (
    <div className="sidebar">
      <h3>Filters</h3>
      <ul className="list-group">
        {filters.map((filter) => (
          <li
            key={filter}
            className="list-group-item"
            onClick={() => onSelectFilter(filter)}
          >
            {filter}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarComponent;