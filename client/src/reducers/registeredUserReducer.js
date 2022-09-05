const user = JSON.parse(localStorage.getItem("user"));
const token = localStorage.getItem("token");

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: user ? user : null,
  isLoggedIn: token ? true : false,
};

const registeredUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DISPLAY_ALERT":
      return {
        ...state,
        showAlert: true,
        alertType: "danger",
        alertText: "Please provide all values",
      };
    case "CLEAR_ALERT":
      return {
        ...state,
        showAlert: false,
        alertType: "",
        alertText: "",
      };
    case "REGISTER_USER_BEGIN":
      return {
        ...state,
        isLoading: true,
      };

    case "REGISTER_USER_SUCCESS":
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        isLoggedIn: true,
        showAlert: true,
        alertType: "success",
        alertText: action.payload.msg,
      };

    case "REGISTER_USER_ERROR":
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: "danger",
        alertText: action.payload.msg,
      };

    case "LOGIN_USER_BEGIN":
      return {
        ...state,
        isLoading: true,
      };

    case "LOGIN_USER_SUCCESS":
      return {
        ...state,
        isLoading: false,
        user: action.payload.username,
        isLoggedIn: true,
        showAlert: true,
        alertType: "success",
        alertText: "Login Successful, redirecting...",
      };

    case "LOGIN_USER_ERROR":
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: "danger",
        alertText: action.payload.msg,
      };

    case "LOGOUT_USER":
      localStorage.clear();
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};

export default registeredUserReducer;
