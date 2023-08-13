import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import {
    Suspense, useCallback, useEffect,
} from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';

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

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div>
            <Suspense fallback="">
                <Navbar />
                <div className="content_page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
