import { AuthState } from "./AutContext";

type AuthAction = { type: 'signIn' }

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
            break;

        default:
            return state
    }

}