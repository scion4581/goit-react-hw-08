import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectFilterName } from '../../redux/filtersSlice';

import css from './SearchBox.module.css';

export default function SearchBox() {
    
    const filterName = useSelector(selectFilterName);
    const dispatch = useDispatch();

    return (
        <div className={css.searchBox} >
            <p>Find contacts by name</p>
            <input type='text' value={filterName} onChange={(e) => dispatch(changeFilter(e.target.value))} />
        </div>
    );
}