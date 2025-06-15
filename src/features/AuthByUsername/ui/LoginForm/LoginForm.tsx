import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {HStack, VStack} from '@/shared/ui/redesigned/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Input } from '@/shared/ui/redesigned/Input';
import { Text } from '@/shared/ui/redesigned/Text';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { loginByUsername } from '../../model/services/LoginByUserName/LoginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import {ToggleFeatures} from "@/shared/lib/features";
import {useForceUpdate} from "@/shared/lib/render/forceUpdate";

export interface LoginFormProps {
    className?: string;
    onSuccess?: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo((props: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);
    const forceUpdate = useForceUpdate();

    const { className, onSuccess } = props;

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );
    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );
    const onLoginClick = useCallback(async () => {
        const result = await dispatch(
            loginByUsername({
                username,
                password,
            }),
        );
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess?.();
            forceUpdate();
        }
    }, [onSuccess, dispatch, username, password, forceUpdate]);

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <ToggleFeatures feature="isRedesigned"
                off={
                    <VStack className={classNames(cls.LoginForm, {}, [className])}>
                        <TextDeprecated title={t('Форма авторизации')} />
                        {error && (
                            <TextDeprecated text={t('Неправильный логин или пароль')} theme={TextTheme.ERROR} />
                        )}
                        <InputDeprecated
                            type="text"
                            placeholder={t('Логин')}
                            autoFocus
                            onChange={onChangeUsername}
                            value={username}
                        />
                        <InputDeprecated
                            type="text"
                            placeholder={t('Пароль')}
                            onChange={onChangePassword}
                            value={password}
                        />
                        <ButtonDeprecated theme={ButtonTheme.OUTLINE} onClick={onLoginClick} disabled={isLoading}>
                            {t('Войти')}
                        </ButtonDeprecated>
                    </VStack>
                }
                on={
                    <VStack className={classNames(cls.LoginForm, {}, [className])} gap="16">
                        <Text title={t('Форма авторизации')} />
                        {error && (
                            <Text text={t('Неправильный логин или пароль')} variant="error" />
                        )}
                        <Input
                            type="text"
                            placeholder={t('Логин')}
                            autoFocus
                            onChange={onChangeUsername}
                            value={username}
                        />
                        <Input
                            type="text"
                            placeholder={t('Пароль')}
                            onChange={onChangePassword}
                            value={password}
                        />
                        <HStack justify="end">
                            <Button variant="outline" onClick={onLoginClick} disabled={isLoading}>
                                {t('Войти')}
                            </Button>
                        </HStack>
                    </VStack>
                }
            />
        </DynamicModuleLoader>
    );
});

export default LoginForm;
