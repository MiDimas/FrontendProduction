import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { EditableProfileCard, profileReducer } from '@/features/EditableProfileCard';
import { Page } from '@/widgets/Page';
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
            <Page
                className={
                    classNames(cls.ProfilePage, {}, [className])
                }
                data-testid="ProfilePage"
            >
                <EditableProfileCard id={id} />
            </Page>
        </DynamicModuleLoader>
    );
});
export default ProfilePage;
