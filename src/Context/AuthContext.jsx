import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";

export const AuthContext = createContext();
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.uid,
        token: action.payload.accessToken,
      };

    case "LOGOUT":
      localStorage.clear();

      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const UseAuth = () => {
  const Auth = useContext(AuthContext);
  return Auth;
};
export { AuthProvider, UseAuth };
