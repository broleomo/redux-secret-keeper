export const reducer = (state={}, action) => {
  switch(action.type) {
    case 'AUTH_TOKEN':
      return {...state, token: action.token};
      case 'DASHBOARD':
        return{...state, full_name: action.full_name, email: action.email, message: action.message}
      default:
        return state;
  }
}
