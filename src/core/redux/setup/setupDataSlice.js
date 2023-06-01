import { createSlice } from '@reduxjs/toolkit';

export const DataSlice = createSlice({
  name: 'dataSlice',
  initialState: { loggedUser: null, token: null },
  reducers: {
    updateApp: (state, actions) => {
      state.app = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateApp } = DataSlice.actions;

export default DataSlice.reducer;