import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from 'clsx';
import styles from './index.module.scss';
const FilterButtons = ({ setFilter, currentFilter }) => (_jsxs("div", { className: styles['filter-buttons'], children: [_jsx("button", { className: clsx(styles['filter-buttons__button'], {
                [styles['active']]: currentFilter === 'all',
            }), onClick: () => setFilter('all'), children: "All" }), _jsx("button", { className: clsx(styles['filter-buttons__button'], {
                [styles['active']]: currentFilter === 'active',
            }), onClick: () => setFilter('active'), children: "Active" }), _jsx("button", { className: clsx(styles['filter-buttons__button'], {
                [styles['active']]: currentFilter === 'completed',
            }), onClick: () => setFilter('completed'), children: "Completed" })] }));
export default FilterButtons;
