import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import api from '@/services/api';
import { toast } from 'sonner';

interface User {
    id: string;
    username: string;
    email: string;
    xp: number;
    level: number;
    badges: string[];
}

interface AuthContextType {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<void>;
    signup: (username: string, email: string, password: string) => Promise<void>;
    logout: () => void;
    updateXP: (xp: number, level?: number) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    useEffect(() => {
        const loadUser = async () => {
            if (token) {
                try {
                    api.defaults.headers.common['x-auth-token'] = token;
                    const res = await api.get('/auth/user');
                    setUser(res.data);
                } catch (err) {
                    console.error('Error loading user:', err);
                    localStorage.removeItem('token');
                    setToken(null);
                    setUser(null);
                }
            }
            setIsLoading(false);
        };

        loadUser();
    }, [token]);

    const login = async (email: string, password: string) => {
        try {
            const res = await api.post('/auth/login', { email, password });
            localStorage.setItem('token', res.data.token);
            setToken(res.data.token);
            setUser(res.data.user);
            toast.success('Logged in successfully!');
        } catch (err: any) {
            console.error('Login error:', err);
            toast.error(err.response?.data?.msg || 'Login failed');
            throw err;
        }
    };

    const signup = async (username: string, email: string, password: string) => {
        try {
            const res = await api.post('/auth/signup', { username, email, password });
            localStorage.setItem('token', res.data.token);
            setToken(res.data.token);
            setUser(res.data.user);
            toast.success('Account created successfully!');
        } catch (err: any) {
            console.error('Signup error:', err);
            toast.error(err.response?.data?.msg || 'Signup failed');
            throw err;
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
        toast.info('Logged out');
    };

    const updateXP = async (xp: number, level?: number) => {
        try {
            const res = await api.put('/user/xp', { xp, level });
            setUser(res.data);
        } catch (err) {
            console.error('Error updating XP:', err);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                isAuthenticated: !!user,
                isLoading,
                login,
                signup,
                logout,
                updateXP
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
