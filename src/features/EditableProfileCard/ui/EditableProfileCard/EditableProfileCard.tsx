import { FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Profile, ProfileCard } from 'entities/Profile';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import {
    getProfileValidateError,
} from '../../model/selectors/getProfileValidateErrors/getProfileValidateError';
import { profileAction } from '../../model/slice/profileSlice';
import {
    EditableProfileCardHeader,
} from '../EditableProfileCardHeader/EditableProfileCardHeader';
import cls from './EditableProfileCard.module.scss';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { ValidateErrorTranslates, ValidateProfileError } from '../../model/types/ProfileSchema';

interface EditableProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
}
export const EditableProfileCard: FC<EditableProfileCardProps> = (props) => {
    const {
        className,
        data,
        isLoading,
        error,
    } = props;
    const { t } = useTranslation('profile');
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateError);
    const dispatch = useAppDispatch();

    const validateErrorTranslates: ValidateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t('Ошибка сервера при сохранении'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
        [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректный регион'),
        [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
    };

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileAction.updateProfile({ firstname: value }));
    }, [dispatch]);
    const onChangeLastname = useCallback((value:string) => {
        dispatch(profileAction.updateProfile({ lastname: value }));
    }, [dispatch]);
    const onChangeAge = useCallback((value?: string | number) => {
        dispatch(profileAction.updateProfile({ age: Number(value) || undefined }));
    }, [dispatch]);
    const onChangeCity = useCallback((value:string) => {
        dispatch(profileAction.updateProfile({ city: value }));
    }, [dispatch]);
    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileAction.updateProfile({ username: value }));
    }, [dispatch]);
    const onChangeAvatar = useCallback((value:string) => {
        dispatch(profileAction.updateProfile({ avatar: value }));
    }, [dispatch]);
    const onChangeCurrency = useCallback((value: Currency) => {
        dispatch(profileAction.updateProfile({ currency: value }));
    }, [dispatch]);
    const onChangeCountry = useCallback((value: Country) => {
        dispatch(profileAction.updateProfile({ country: value }));
    }, [dispatch]);

    return (
        <div className={
            classNames(cls.EditableProfileCard, {}, [className])
        }
        >
            <EditableProfileCardHeader />
            {validateErrors?.length && validateErrors.map((validateError) => (
                <Text
                    theme={TextTheme.ERROR}
                    text={validateErrorTranslates[validateError]}
                    key={validateError}
                />
            ))}
            <ProfileCard
                data={data}
                isLoading={isLoading}
                error={error}
                readonly={readonly}
                onChangeFirstname={onChangeFirstname}
                onChangeLastname={onChangeLastname}
                onChangeAge={onChangeAge}
                onChangeCity={onChangeCity}
                onChangeUsername={onChangeUsername}
                onChangeAvatar={onChangeAvatar}
                onChangeCurrency={onChangeCurrency}
                onChangeCountry={onChangeCountry}
            />
        </div>
    );
};
