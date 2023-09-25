import React from 'react';
import { Input } from 'antd';

const FilterSection: React.FC = () => {

  // Define an array of filter titles
  const filterTitles: string[] = [
    'Personal Information',
    'Filter 2',
    'Filter 3',
    'Filter 4',
    'Filter 5',
  
  ];

  return (
    <div className="FilterSection">
      <div className="SearchSection">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>

        <Input placeholder="Search by name, edu, exp, or #tag" />
      </div>
      <div className="filterSection-Box">
        <div className="filterSection-BoxHead">
          <h4>Filters</h4>
          <h5>0 Selected</h5>
        </div>
        <div className="filterSection-filters">
          {filterTitles.map((title, index) => (
            <div className="filterSection-filter" key={index}>
              <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              <h3>{title}</h3>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
