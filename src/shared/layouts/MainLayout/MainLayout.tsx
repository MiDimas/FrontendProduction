import {ReactElement} from "react";
import cls from './MainLayout.module.scss'
import {classNames} from "@/shared/lib/classNames/classNames";

interface MainLayoutProps {
    className?: string;
    header: ReactElement;
    content: ReactElement;
    sidebar: ReactElement;
    toolbar?: ReactElement;

}
const MainLayout = (props: MainLayoutProps) => {
    const { className,
        header,
        content,
        sidebar,
        toolbar} = props;
    return (
        <div className={classNames(cls.MainLayout, {}, [className])}>
            <div className={cls.sidebar}>{sidebar}</div>
            <div className={cls.content}>{content}</div>
            <div className={cls.rightbar}>
                <div className={cls.header}>{header}</div>
                <div className={cls.toolbar}>{toolbar}</div>
            </div>
        </div>
    );
}

export default MainLayout;