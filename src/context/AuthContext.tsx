import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import api from '@/services/api';
import { toast } from 'sonner';

interface User {
    id: string;
    username: string;
    email: string;
    xp: number;
    level: number;
    completedLessons: number[];
    currentLesson: number;
    badges: string[];
    budgetChallenge?: {
        isActive: boolean;
        startDate?: string;
        lastCheckIn?: string;
        daysCompleted: number;
    };
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
    updateProgress: (lessonId: number, completed?: boolean) => Promise<void>;
    updateChallenge: (action: 'start' | 'checkin') => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const initAuth = async () => {
            const storedToken = localStorage.getItem('token');
            if (storedToken) {
                setToken(storedToken);
                try {
                    // Set header for this request (interceptor handles others, but good to be explicit for initial load)
                    api.defaults.headers.common['x-auth-token'] = storedToken;
                    const res = await api.get('/auth/user');
                    setUser(res.data);
                } catch (err) {
                    console.error('Error loading user:', err);
                    localStorage.removeItem('token');
                    setToken(null);
                    setUser(null);
                    delete api.defaults.headers.common['x-auth-token'];
                }
            }
            setIsLoading(false);
        };

        initAuth();
    }, []);

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

    const updateProgress = async (lessonId: number, completed: boolean = true) => {
        try {
            const res = await api.post('/user/progress', { lessonId, completed });
            setUser(res.data);
        } catch (err) {
            console.error('Error updating progress:', err);
        }
    };

    const updateChallenge = async (action: 'start' | 'checkin') => {
        try {
            const res = await api.post('/user/challenge', { action });
            setUser(res.data);
            if (action === 'start') {
                toast.success('Challenge Started! Good luck!');
            } else {
                toast.success('Checked in! +50 XP');
            }
        } catch (err: any) {
            console.error('Error updating challenge:', err);
            toast.error(err.response?.data?.msg || 'Action failed');
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
                updateXP,
                updateProgress,
                updateChallenge
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
