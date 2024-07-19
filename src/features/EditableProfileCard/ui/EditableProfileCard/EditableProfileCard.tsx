import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ProfileCard } from '@/entities/Profile';
import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text, TextTheme } from '@/shared/ui/Text';
import { ValidateProfileError } from '../../model/consts/editableProfileCardConsts';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidateError } from '../../model/selectors/getProfileValidateErrors/getProfileValidateError';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileAction } from '../../model/slice/profileSlice';
import { ValidateErrorTranslates } from '../../model/types/ProfileSchema';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';

interface EditableProfileCardProps {
    className?: string;
    id?: string;
}
export const EditableProfileCard = (props: EditableProfileCardProps) => {
    const { className, id } = props;
    const { t } = useTranslation('profile');
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateError);
    const authData = useSelector(getUserAuthData);
    const data = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const dispatch = useAppDispatch();
    useInitialEffect(() => {
        dispatch(fetchProfileData(id));
    });

    const validateErrorTranslates: ValidateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t('Ошибка сервера при сохранении'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
        [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректный регион'),
        [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
    };

    const onChangeFirstname = useCallback(
        (value?: string) => {
            dispatch(
                profileAction.updateProfile({
                    firstname: value,
                }),
            );
        },
        [dispatch],
    );
    const onChangeLastname = useCallback(
        (value: string) => {
            dispatch(
                profileAction.updateProfile({
                    lastname: value,
                }),
            );
        },
        [dispatch],
    );
    const onChangeAge = useCallback(
        (value?: string | number) => {
            dispatch(
                profileAction.updateProfile({
                    age: Number(value) || undefined,
                }),
            );
        },
        [dispatch],
    );
    const onChangeCity = useCallback(
        (value: string) => {
            dispatch(
                profileAction.updateProfile({
                    city: value,
                }),
            );
        },
        [dispatch],
    );
    const onChangeUsername = useCallback(
        (value?: string) => {
            dispatch(
                profileAction.updateProfile({
                    username: value,
                }),
            );
        },
        [dispatch],
    );
    const onChangeAvatar = useCallback(
        (value: string) => {
            dispatch(
                profileAction.updateProfile({
                    avatar: value,
                }),
            );
        },
        [dispatch],
    );
    const onChangeCurrency = useCallback(
        (value: Currency) => {
            dispatch(
                profileAction.updateProfile({
                    currency: value,
                }),
            );
        },
        [dispatch],
    );
    const onChangeCountry = useCallback(
        (value: Country) => {
            dispatch(
                profileAction.updateProfile({
                    country: value,
                }),
            );
        },
        [dispatch],
    );

    if (authData?.id !== id) {
        return <ProfileCard data={data} isLoading={isLoading} error={error} readonly />;
    }

    return (
        <div className={classNames('', {}, [className])}>
            <EditableProfileCardHeader />
            {validateErrors?.length &&
                validateErrors.map((validateError) => (
                    <Text
                        theme={TextTheme.ERROR}
                        text={validateErrorTranslates[validateError]}
                        key={validateError}
                        data-testid="ProfileCard.Error"
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
