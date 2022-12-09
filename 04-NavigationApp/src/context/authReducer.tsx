import { AuthState } from "./AutContext";

type AuthAction =
    | { type: 'signIn' }
    | { type: 'changeFavIcon', payload: string }

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

        default:
            return state
    }

}