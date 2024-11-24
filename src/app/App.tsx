import {Suspense, useCallback, useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import {
    getUserInitial,
    loadUserData,
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
import {PageLoader} from "@/widgets/PageLoader";
import {toggleFeatures} from "@/shared/lib/features";


function App() {
    const { theme, setTheme } = useTheme();
    const dispatch = useAppDispatch();
    const {theme: newTheme} = useJsonSettings();
    const [isInitTheme, setIsInitTheme] = useState(false);


    // Навешивание темы на body
    const themeBody = useCallback((className:string = 'app') => {
        document.body.className = classNames(className, {}, [theme]);
    }, [theme]);
    const initial = useSelector(getUserInitial);
    useEffect(() => {
        toggleFeatures({
            name: "isRedesigned",
            off: () => themeBody(),
            on: () => themeBody('app_redesigned'),
        })
    }, [themeBody, initial]);
    useEffect(() => {
        dispatch(loadUserData());
    }, [dispatch]);

    useEffect(() => {
        if(!isInitTheme){
            if(newTheme){
                if(newTheme !== theme){
                    setTheme?.(newTheme);
                    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
                }
                setIsInitTheme(true);
            }
        }
    }, [newTheme, setTheme, theme, isInitTheme])

    if(!initial){
        return (
            <PageLoader/>
        )
    }

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
