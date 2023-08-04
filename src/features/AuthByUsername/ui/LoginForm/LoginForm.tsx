import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input type="text" placeholder={t('Логин')} autoFocus />
            <Input type="text" placeholder={t('Пароль')} />
            <Button theme={ButtonTheme.OUTLINE}>{t('Войти')}</Button>
        </div>
    );
};
