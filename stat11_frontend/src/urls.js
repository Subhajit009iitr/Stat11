// Hosts

export const BACKEND_HOST = 'http://localhost:8000'

// Backend URLs

export const baseBackendUrl = () => {
    return `${BACKEND_HOST}/api/`
}

export const loginBackendUrl = () => {
    return `${baseBackendUrl()}auth/login/`
}

export const logoutBackendUrl = () => {
    return `${baseBackendUrl()}auth/logout/`
}

export const signupBackendUrl = () => {
    return `${baseBackendUrl()}auth/signup/`
}

export const userBackendUrl = () => {
    return `${baseBackendUrl()}user/`
}

export const whoAmIBackendUrl = () => {
    return `${userBackendUrl()}who_am_i/`
}

export const isAuthenticatedBackendUrl = () => {
    return `${userBackendUrl()}check_if_authenticated/`
}

export const teamUrl = () => {
    return `${baseBackendUrl()}batter_scoreboard/`
}

export const teamBackendUrl = () => {
    return `${baseBackendUrl()}team/`
}

export const matchTeamsBackendUrl = (matchId) => {
    return `${teamBackendUrl()}?match__id=${matchId}`
}

export const matchBackendUrl = () => {
    return `${baseBackendUrl()}match/`
}

export const allMatchAndTeamsUrl = () => {
    return `${matchBackendUrl()}all_match_and_teams/`
}

export const teamBattersScoreUrl = () =>{
    return `${teamBackendUrl()}all_teams_and_batters/`
}

export const teamBowlersScoreUrl = () =>{
    return `${teamBackendUrl()}all_teams_and_bowlers/`
}

export const matchMVPUrl =() =>{
    return `${matchBackendUrl()}mvp_top_three/`
}
