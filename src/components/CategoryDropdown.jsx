import React from 'react';

const CategoryDropdown = ({selectedCategory, handleCategoryChange}) => {
    return (
        <div className="mil-category-dropdown-wrapper">
            <select
                className="mil-category-dropdown mil-button "
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
            >
                <option value="all">All Projects <span className="mil-dropdown-icon">&#9660;</span></option>
                <option value="photography">Photography <span className="mil-dropdown-icon">&#9660;</span></option>
                <option value="videography">Videography <span className="mil-dropdown-icon">&#9660;</span></option>
            </select>
        </div>
    );
};

export default CategoryDropdown;