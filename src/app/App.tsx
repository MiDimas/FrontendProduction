import {Suspense, useCallback, useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import {
    getUserInitial,
    userActions,
    updateUserData,
    useUserUpdated,
    useJsonSettings
} from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { AppRouter } from './providers/router';
import './styles/index.scss';
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import {LOCAL_STORAGE_THEME_KEY} from "@/shared/const/localstorage";


function App() {
    const { theme, setTheme } = useTheme();
    const dispatch = useAppDispatch();
    const {theme: newTheme} = useJsonSettings();
    const [isInitTheme, setIsInitTheme] = useState(false);


    // Навешивание темы на body
    const themeBody = useCallback(() => {
        document.body.className = classNames('app', {}, [theme]);
    }, [theme]);
    useEffect(() => {
        themeBody();
    }, [themeBody]);
    const initial = useSelector(getUserInitial);
    const updated = useUserUpdated();
    useEffect(() => {
        dispatch(userActions.initAuthData());
        dispatch(updateUserData());
    }, [dispatch]);

    useEffect(() => {
        if(!isInitTheme){
            if(updated && newTheme){
                if(newTheme !== theme){
                    setTheme?.(newTheme);
                    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
                }
                setIsInitTheme(true);
            }
        }
    }, [updated, newTheme, setTheme, theme, isInitTheme])


    return (
        <div>
            <Suspense fallback="">
                <Navbar />
                <div className="content_page">
                    <Sidebar />
                    {initial && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
}

export default App;
