import { GAME } from './actionTypes'

const initialState = {
    game: {
        data: [],
        loading: false,
        error: null
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GAME:
            return {
                ...state,
                game: {
                    data: action.game,
                    loading: action.loading,
                    error: action.error
                }
            }

        default:
            return state
    }
}

export default reducer