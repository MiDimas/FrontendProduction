import { memo, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    EditableProfileCard,
    fetchProfileData, getProfileError, getProfileForm, getProfileIsLoading,
    profileReducer,
} from 'features/EditableProfileCard';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { ProfileCard } from 'entities/Profile';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import cls from './ProfilePage.module.scss';

const reducers: ReducersList = {
    profile: profileReducer,
};
interface ProfilePageProps {
    className?: string;
}
const ProfilePage = memo((props: ProfilePageProps) => {
    const { className } = props;
    const { id } = useParams<{id: string}>();
    const { t } = useTranslation();

    const data = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const authData = useSelector(getUserAuthData);

    const dispatch = useAppDispatch();
    useInitialEffect(
        () => {
            if (id) {
                dispatch(fetchProfileData(id));
            }
        },
    );
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={
                classNames(cls.ProfilePage, {}, [className])
            }
            >
                { authData?.id === id
                    ? <EditableProfileCard data={data} isLoading={isLoading} error={error} />
                    : (
                        <>
                            <Text title={t('Профиль')} />
                            <ProfileCard data={data} isLoading={isLoading} error={error} readonly />
                        </>
                    )}
            </div>
        </DynamicModuleLoader>
    );
});
export default ProfilePage;
