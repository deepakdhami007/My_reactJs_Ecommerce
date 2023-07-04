import React from 'react';

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    userEmail: '',
    // addUserEmail: ()=> {},
    login:(token) => {},
    logout: () => {}    
})

export default AuthContext;