import { FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ProfileCard } from 'entities/Profile';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { profileAction } from '../../model/slice/profileSlice';
import {
    EditableProfileCardHeader,
} from '../EditableProfileCardHeader/EditableProfileCardHeader';
import cls from './EditableProfileCard.module.scss';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';

interface EditableProfileCardProps {
    className?: string;
}
export const EditableProfileCard: FC<EditableProfileCardProps> = (props) => {
    const { className } = props;
    const data = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();
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
