import React from 'react';
interface FilterButtonsProps {
    setFilter: (filter: 'all' | 'active' | 'completed') => void;
    currentFilter: 'all' | 'active' | 'completed';
}
declare const FilterButtons: React.FC<FilterButtonsProps>;
export default FilterButtons;
