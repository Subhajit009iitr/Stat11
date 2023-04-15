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

export const teamDataUrl = () => {
    return `${baseBackendUrl()}team/`
}