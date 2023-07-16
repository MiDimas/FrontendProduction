import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import {
    Suspense, useCallback, useEffect, useState,
} from 'react';
import { Modal } from 'shared/ui/Modal/Modal';

function App() {
    const { theme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const onOpen = () => {
        setIsOpen(true);
    };
    const onClose = () => {
        setIsOpen(false);
    };
    const anyString = `
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur
    consequuntur fuga placeat repudiandae sint voluptatum.
    Beatae earum eligendi explicabo illo ipsum iusto laboriosam, quia quisquam
    recusandae repellat tempore totam!`;
    const themeBody = useCallback(() => {
        document.body.className = classNames('app', {}, [theme]);
    }, [theme]);
    useEffect(() => {
        themeBody();
    }, [themeBody]);
    return (
        <div>
            <Suspense fallback="">
                <Modal isOpen={isOpen} onClose={onClose}>
                    {anyString}
                </Modal>
                <Navbar />
                <button onClick={onOpen} type="button">{'>>>'}</button>
                <div className="content_page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
