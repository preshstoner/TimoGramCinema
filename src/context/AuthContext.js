import  React, { createContext, useState, useEffect} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));

    useEffect(() => {
        if (token) {
            // Optional: decode token to get user info
            setUser({ token }); // You can replace this with actual user data
        }
    }, [token]);

    const login = (newToken) => {
        localStorage.setItem('token', newToken);
        setToken(newToken); 
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
    };

    const authHeader = () => ({
        headers:{
            Authorization: `Bearer ${token}`
        }
    }); 

    return (
        <AuthContext.Provider value={{ user, login, logout, authHeader }}>
            {children}
        </AuthContext.Provider>
    );
};