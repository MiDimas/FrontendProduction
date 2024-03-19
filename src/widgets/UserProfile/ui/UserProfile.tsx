import {
    EditableProfileCard,
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
} from 'features/EditableProfileCard';
import { Text } from 'shared/ui/Text/Text';
import { ProfileCard } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { useTranslation } from 'react-i18next';

interface UserProfileProps {
    id?: string;
}
export const UserProfile = (props: UserProfileProps) => {
    const { id } = props;
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
        <div>
            {authData?.id === id
                ? <EditableProfileCard data={data} isLoading={isLoading} error={error} />
                : (
                    <>
                        <Text title={t('Профиль')} />
                        <ProfileCard data={data} isLoading={isLoading} error={error} readonly />
                    </>
                )}
        </div>
    );
};
