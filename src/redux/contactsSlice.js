import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsInitialState = {items: []};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer: (state, action) => {
                state.items.push(action.payload);
            },
            prepare: (contactData) => {
                return { payload: { id: nanoid(), ...contactData } };
            }
        },
        deleteContact: (state, action) => {
            state.items = state.items.filter((contact) => contact.id !== action.payload);
        },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;