import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';

function App() {
    const { theme } = useTheme();
    // const [isOpen, setIsOpen] = useState(false);
    //
    // const onOpen = () => {
    //     setIsOpen(true);
    // };
    // const onClose = () => {
    //     setIsOpen(false);
    // };

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                {/* <Modal isOpen={isOpen} onClose={onClose} /> */}
                <Navbar />
                {/* <button onClick={onOpen}>Открыть модальное окно</button> */}
                <div className="content_page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
