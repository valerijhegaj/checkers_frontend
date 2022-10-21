import {authAPI} from "../../api/api";

const ActionTypes = {
  Switch: "switch display",
}

export const switcherCondition = {
  login: 0,
  createUser: 1,
  mainMenu: 2,
  startLoading: 3,
  startMenu: 4
}
const initialState = {
  condition: switcherCondition.startLoading
}

export const switcher = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.Switch:
      return {condition: action.condition}
    default:
      return state
  }
}

export const updateSwitcher = (condition) => {
  return {type: ActionTypes.Switch, condition: condition}
}

export const startLoad = () => async (dispatch) => {
  let error = await authAPI.checkAuth().catch(() => {})
  if (typeof(error) != "undefined") {
    dispatch(updateSwitcher(switcherCondition.mainMenu))
    return
  }
  dispatch(updateSwitcher(switcherCondition.startMenu))
}