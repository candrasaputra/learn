import { GAME } from './actionTypes'

export const setGameSetting = (game) => dispatch => {
  dispatch({ type: GAME, game: [], loading: true })
  dispatch({ type: GAME, game: game, loading: false })
}