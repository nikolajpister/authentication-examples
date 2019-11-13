import * as ACTION_TYPES from './action_types';

export const loginSuccess = (username, token) => {
    return {
        type: ACTION_TYPES.SUCCESS,
        username: username,
        token: token
    }
}

export const logout = () => {
    return {
        type: ACTION_TYPES.LOGOUT,
        username: null,
        token: null
    }
}

export const failure = () => {
    return {
        type: ACTION_TYPES.FAILURE,
        payload: [],
        failed: true
    }
}