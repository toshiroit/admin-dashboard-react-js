import { AuthMaintenance } from './../../types/auth';
import { createSlice } from '@reduxjs/toolkit';
const initialState: AuthMaintenance = {
  active: true,
  maintenance: {
    code: '125816',
    day: 24,
    hour: 60,
    min: 30,
    sec: 60
  }
};

const maintenanceSlice = createSlice({
  name: 'maintenanceSlice',
  initialState,
  reducers: {
    activeMaintenance: (state, action) => {
      state.active = !state.active;
    }
  }
});
export default maintenanceSlice.reducer;
