import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string;
}
const ProfilePage: FC<ProfilePageProps> = (props) => {
    const { t } = useTranslation();
    const { className } = props;
    return (
        <div className={
            classNames(cls.ProfilePage, {}, [className])
        }
        >
            {t('Страница профиля')}
        </div>
    );
};
export default ProfilePage;
