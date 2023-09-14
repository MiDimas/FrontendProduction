import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { ProfileCard } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchProfileData, profileReducer } from 'features/EditableProfileCard';
import cls from './ProfilePage.module.scss';

const reducers: ReducersList = {
    profile: profileReducer,
};
interface ProfilePageProps {
    className?: string;
}
const ProfilePage = memo((props: ProfilePageProps) => {
    const { t } = useTranslation('profile');
    const { className } = props;

    const dispatch = useAppDispatch();
    useEffect(
        () => {
            dispatch(fetchProfileData());
        },
        [dispatch],
    );
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={
                classNames(cls.ProfilePage, {}, [className])
            }
            >
                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    );
});
export default ProfilePage;
