import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import userReducer from '../features/user/userSlice'
import sideBarReducer from '../features/sideBar/sideBarSlice'
import matchReducer from '../features/match/matchSlice'
import teamReducer from '../features/team/teamSlice'
import playerReducer from '../features/player/playerSlice'
import batterScoreboardReducer from '../features/scoreboard/batterScoreboardSlice'
import bowlerScoreboardReducer from '../features/scoreboard/bowlerScoreboardSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    sideBar: sideBarReducer,
    match: matchReducer,
    team: teamReducer,
    player: playerReducer,
    batterScoreboard: batterScoreboardReducer,
    bowlerScoreboard: bowlerScoreboardReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
});
