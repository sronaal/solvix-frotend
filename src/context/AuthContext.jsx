import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)



    useEffect(() => {

       localStorage.setItem("user", JSON.stringify({
            name: "ronal",
            rol: "administrador"
        }));

        const stored = localStorage.getItem('user')

        if (stored) setUser(JSON.parse(stored))

        setLoading(false)
    }, [])


    return (
        <AuthContext.Provider value={{ user, setUser, loading }}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => useContext(AuthContext)

