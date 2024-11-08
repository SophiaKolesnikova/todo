import React from 'react';
import clsx from 'clsx';
import styles from './index.module.scss';

interface FilterButtonsProps {
  setFilter: (filter: 'all' | 'active' | 'completed') => void;
  currentFilter: 'all' | 'active' | 'completed';
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ setFilter, currentFilter }) => (
  <div className={styles['filter-buttons']}>
    <button
      className={clsx(styles['filter-buttons__button'], {
        [styles['active']]:currentFilter === 'all',
      })}
      onClick={() => setFilter('all')}
    >
      All
    </button>
    <button
      className={clsx(styles['filter-buttons__button'], {
        [styles['active']]:currentFilter === 'active',
      })}
      onClick={() => setFilter('active')}
    >
      Active
    </button>
    <button
      className={clsx(styles['filter-buttons__button'], {
        [styles['active']]:currentFilter === 'completed',
      })}
      onClick={() => setFilter('completed')}
    >
      Completed
    </button>
  </div>
);
export default FilterButtons;