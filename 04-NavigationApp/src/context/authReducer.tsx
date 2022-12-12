import { AuthState } from "./AutContext";

type AuthAction =
    | { type: 'signIn' }
    | { type: 'logOut' }
    | { type: 'changeFavIcon', payload: string }
    | { type: 'changeUsername', payload: string }

//generaEstado
export const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    // return state

    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                username: 'no-username-yet'
            }
        case 'changeFavIcon':
            return {
                ...state,
                favoriteIcon: action.payload
            }

        case 'logOut':
            return {
                ...state,
                isLoggedIn: false,
                username: undefined,
                favoriteIcon: undefined

            }

        case 'changeUsername':
            return {
                ...state,
                username: action.payload
            }

        default:
            return state
    }

}