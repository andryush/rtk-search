import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  isSearchTouched: boolean;
}

const initialState: SearchState = {
  isSearchTouched: false,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchTouched: (state, action: PayloadAction<boolean>) => {
      state.isSearchTouched = action.payload;
    },
  },
});

export const { setSearchTouched } = searchSlice.actions;

export const selectIsSearchTouched = (state: { search: SearchState }) => state.search.isSearchTouched;

export default searchSlice.reducer;
