import {classNames} from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({className}: LoginFormProps) => {
    const {t} = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <input type={"text"}/>
            <input type={"text"}/>
            <Button theme={ButtonTheme.OUTLINE}>{t('Войти')}</Button>
        </div>
    );
};
