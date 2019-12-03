export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_INIT":
      return {
        ...state,
        isAuthenticated: false,
        error: false,
        errorMsg: null
      };

    case "LOGIN":
      const expirationDate = new Date(
        new Date().getTime() + 24 * 60 * 60 * 7 * 1000
      );
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("name", action.payload.name);
      localStorage.setItem("email", action.payload.email);
      localStorage.setItem("year", action.payload.year);
      localStorage.setItem("expirationDate", expirationDate);
      localStorage.setItem("profile_pic", action.payload.profile_pic);

      return {
        ...state,
        isAuthenticated: true,
        name: action.payload.name,
        email: action.payload.email,
        token: action.payload.token,
        year: action.payload.year,
        profile_pic: action.payload.profile_pic
      };
    case "LOGIN_ERROR": {
      return {
        ...state,
        isAuthenticated: false,
        name: null,
        email: null,
        token: null,
        year: null,
        error: true,
        errorMsg: action.payload.errorMsg
      };
    }
    case "LOGOUT": {
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      localStorage.removeItem("email");
      localStorage.removeItem("year");
      localStorage.removeItem("expirationDate");
      localStorage.removeItem("profile_pic");

      return {
        ...state,
        isAuthenticated: false,
        name: null,
        email: null,
        token: null,
        year: null,
        error: null,
        errorMsg: null
      };
    }
    default:
      return state;
  }
};
