import { createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

const filtersInitialState = { name: '' };

const filtersSlice = createSlice({
    name: 'filters',
    initialState: filtersInitialState,
    reducers: {
        changeFilter(state, action) {
            state.name = action.payload;
        },
    },
});

export const { changeFilter } = filtersSlice.actions;

export default filtersSlice.reducer;