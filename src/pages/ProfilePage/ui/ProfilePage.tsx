import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'features/EditableProfileCard';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';
import { UserProfile } from 'widgets/UserProfile';
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

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={
                classNames(cls.ProfilePage, {}, [className])
            }
            >
                <UserProfile id={id} />
            </Page>
        </DynamicModuleLoader>
    );
});
export default ProfilePage;
