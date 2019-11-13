import * as ACTION_TYPES from "./../actions/action_types";


const initialState = {
    isAuthenticated: false,
    username: null
}

const AuthReducer = (state = initialState, action) => {

    switch (action.type) {
        case ACTION_TYPES.SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                username: action.username
            }
        case ACTION_TYPES.FAILURE:
            return {
                ...state,
                isAuthenticated: false,
                username: null
            }
        case ACTION_TYPES.LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                username: null
            }
        default:
            return state
    }

}

export default AuthReducer;