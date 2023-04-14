import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import userReducer from '../features/user/userSlice'
import sideBarReducer from '../features/sideBar/sideBarSlice'
import matchCardReducer from '../features/matchCard/matchCardSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    sideBar: sideBarReducer,
    matchCard: matchCardReducer
  },
});
