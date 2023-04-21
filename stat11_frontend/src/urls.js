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

export const batterScoreboardBackendUrl = () => {
    return `${baseBackendUrl()}batter_scoreboard/`
}

export const teamBackendUrl = () => {
    return `${baseBackendUrl()}team/`
}

export const matchParticipatingTeamsBackendUrl = (matchId) => {
    return `${teamBackendUrl()}?match__id=${matchId}`
}

export const distinctTeamsBackendUrl = () => {
    return `${teamBackendUrl()}filter_distinct_teams/`
}

export const matchBackendUrl = () => {
    return `${baseBackendUrl()}match/`
}

export const allMatchAndTeamsDetailsUrl = (matchId) => {
    return `${matchBackendUrl()}all_match_and_team_details/?match__id=${matchId}`
}

export const allMatchAndTeamsUrl = () => {
    return `${matchBackendUrl()}all_match_and_teams/`
}

// export const participatingTeamsBackendUrl = (matchId) => {
//     // return `${matchBackendUrl()}${matchId}/participating_teams/`
//     return `${matchBackendUrl()}1/participating_teams/`
// }

export const teamBattersScoreUrl = (teamId) =>{
    return `${teamBackendUrl()}all_teams_and_batters/?team__id=${teamId}`
}

export const teamBowlersScoreUrl = (teamId) =>{
    return `${teamBackendUrl()}all_teams_and_bowlers/?team__id=${teamId}`
}

export const matchMVPUrl =(matchId) =>{
    return `${matchBackendUrl()}mvp_top_three/?match__id=${matchId}`
}

export const matchTeamsUrl =(matchId) =>{
    return `${matchBackendUrl()}teamList/?match__id=${matchId}`
}

export const playerBackendUrl = () => {
    return `${baseBackendUrl()}player/`
}

export const sortedBattersUrl = (matchId) =>{
    return `${matchBackendUrl()}sortedBatters/?match__id=${matchId}`
}

export const sortedBowlersUrl = (matchId) =>{
    return `${matchBackendUrl()}sortedBowlers/?match__id=${matchId}`
}