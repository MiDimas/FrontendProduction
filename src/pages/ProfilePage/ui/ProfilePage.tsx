import { memo, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    EditableProfileCard,
    fetchProfileData,
    profileReducer,
} from 'features/EditableProfileCard';
import cls from './ProfilePage.module.scss';

const reducers: ReducersList = {
    profile: profileReducer,
};
interface ProfilePageProps {
    className?: string;
}
const ProfilePage = memo((props: ProfilePageProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();
    useEffect(
        () => {
            if (__PROJECT__ !== 'storybook') {
                dispatch(fetchProfileData());
            }
        },
        [dispatch],
    );
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={
                classNames(cls.ProfilePage, {}, [className])
            }
            >
                <EditableProfileCard />
            </div>
        </DynamicModuleLoader>
    );
});
export default ProfilePage;
