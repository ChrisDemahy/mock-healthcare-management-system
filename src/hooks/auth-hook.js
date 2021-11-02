import React from "react";

const authContext = React.createContext();

export const useAuth = () => React.useContext(authContext);

const useProvideAuth = () => {
  const [user, setUser] = React.useState(null);

  const signIn = (email, password) => {
    // TODO Create function to sign in the user

    setUser({ email, name: "" });
  };

  const signOut = () => {
    // TODO Create a function to sign out a user
    setUser(null);
  };

  const signUp = (email, name, password) => {
    //   TODO Create function to sign up the user with API
    setUser({ email, name });
  };

  return {
    user,
    signIn,
    signOut,
    signUp,
  };
};

export const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}> {children}</authContext.Provider>;
};
