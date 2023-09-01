import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string;
}
const ProfilePage = memo((props: ProfilePageProps) => {
    const { t } = useTranslation('profile');
    const { className } = props;
    return (
        <div className={
            classNames(cls.ProfilePage, {}, [className])
        }
        >
            {t('Страница профиля')}
        </div>
    );
});
export default ProfilePage;
