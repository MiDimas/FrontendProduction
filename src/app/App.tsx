import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import {
    Suspense, useCallback, useEffect,
} from 'react';

function App() {
    const { theme } = useTheme();

    // Навешивание темы на body
    const themeBody = useCallback(() => {
        document.body.className = classNames('app', {}, [theme]);
    }, [theme]);
    useEffect(() => {
        themeBody();
    }, [themeBody]);

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
