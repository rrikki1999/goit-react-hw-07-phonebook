import { createSlice } from '@reduxjs/toolkit';

const initialContactsState = {
  contacts: [],
  isLoading: false,
  error: null,
};

// {                    theory
//   contacts: {
//     items: [],
//     isLoading: false,
//     error: null
//   },
//   filter: ""
// }

const contacts = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.items = action.payload;
    },
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  contacts.actions;
export default contacts.reducer;
