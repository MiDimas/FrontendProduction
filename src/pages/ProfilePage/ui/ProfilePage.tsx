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
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useParams } from 'react-router-dom';
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
                <EditableProfileCard />
            </div>
        </DynamicModuleLoader>
    );
});
export default ProfilePage;
