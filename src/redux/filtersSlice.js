import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: {
    name: '',
  },
};

const filterSlice = createSlice({
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
export const filterReducer = filterSlice.reducer;
export const { selectedName } = filterSlice.selectors;
export const { changeFilter } = filterSlice.actions;
