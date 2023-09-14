import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from 'entities/Profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
}
export const ProfileCard: FC<ProfileCardProps> = (props) => {
    const { t } = useTranslation('profile');
    const {
        className,
        data,
        isLoading,
        error,
    } = props;
    return (
        <div className={
            classNames(cls.ProfileCard, {}, [className])
        }
        >
            <div className={cls.header}>
                <Text title={t('Профиль')} />
                <Button
                    className={cls.editBtn}
                    theme={ButtonTheme.OUTLINE}
                >
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    className={cls.input}
                    value={data?.firstname}
                    placeholder={t('Ваше имя')}
                />
                <Input
                    className={cls.input}
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                />
            </div>
        </div>
    );
};
