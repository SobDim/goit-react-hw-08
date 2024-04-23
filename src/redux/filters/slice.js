import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: {
    name: '',
  },
};

const slice = createSlice({
  name: 'filter',
  initialState,
  selectors: {
    selectedName: state => state.filter.name,
  },
  reducers: {
    changeFilter: (state, { payload }) => {
      state.filter.name = payload;
    },
  },
});
export const filterReducer = slice.reducer;
export const { selectedName } = slice.selectors;
export const { changeFilter } = slice.actions;
