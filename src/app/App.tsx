import './styles/index.scss';
import {
    Suspense, useCallback, useEffect,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { getUserInitial, userActions } from '@/entities/User';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();

    // Навешивание темы на body
    const themeBody = useCallback(() => {
        document.body.className = classNames('app', {}, [theme]);
    }, [theme]);
    useEffect(() => {
        themeBody();
    }, [themeBody]);
    const initial = useSelector(getUserInitial);
    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

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
