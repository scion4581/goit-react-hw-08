import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

import css from './SearchBox.module.css';

export default function SearchBox() {
    
    const selectNameFilter = useSelector((state) => state.filters.name);
    const dispatch = useDispatch();

    return (
        <div className={css.searchBox} >
            <p>Find contacts by name</p>
            <input type='text' value={selectNameFilter} onChange={(e) => dispatch(changeFilter(e.target.value))} />
        </div>
    );
}