export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        name: action.payload.name,
        email: action.payload.email,
        token: action.payload.token
      };
    default:
      return state;
  }
};
