const initLoginObject = {
  username: "",
  password: "",
};
const intiStudentSignUpObj = {
  firstName: "",
  lastName: "",
  college: "",
  degree: "",
  mobileNo: "",
  email: "",
  githubProfile: "",
  linkedinProfile: "",
};
const initStartupSignUpObj = {
  companyName: "",
  location: "",
  numberOfEmployee: "",
  companyType: "",
  linkedinProfile: "",
  founderName: "",
};
const initGoogleData = {
  name: "",
  email: "",
};
const initAuthenticationState = {
  loginFormData: initLoginObject,
  studentSignUpFormData: intiStudentSignUpObj,
  startupSignUpFormData: initStartupSignUpObj,
  googleData: initGoogleData,
};
const AuthenticationReducer = (state, { type, payload }) => {
  switch (type) {
    case "login":
      return {
        ...state,
        loginFormData: {
          ...state.loginFormData,
          [payload.label]: payload.value,
        },
      };
    case "signup_student":
      return {
        ...state,
        studentSignUpFormData: {
          ...state.studentSignUpFormData,
          [payload.label]: payload.value,
        },
      };

    case "signup_startup":
      return {
        ...state,
        startupSignUpFormData: {
          ...state.startupSignUpFormData,
          [payload.label]: payload.value,
        },
      };
    case "google_data":
      return {
        ...state,
        googleData: {
          ...state.googleData,
          ["name"]: payload.name,
          ["email"]: payload.email,
        },
      };
    default:
      return state;
  }
};

export { AuthenticationReducer, initAuthenticationState };
