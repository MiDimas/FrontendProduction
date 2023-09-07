import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}
export const ProfileCard: FC<ProfileCardProps> = (props) => {
    const { t } = useTranslation();
    const { className } = props;
    return (
        <div className={
            classNames(cls.ProfileCard, {}, [className])
        }
        >
            {t('Пусто')}
        </div>
    );
};
