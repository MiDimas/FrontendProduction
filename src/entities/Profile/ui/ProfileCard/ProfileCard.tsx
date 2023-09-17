import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from 'entities/Profile';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
}
export const ProfileCard: FC<ProfileCardProps> = (props) => {
    const { t } = useTranslation('profile');
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
    } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader />
            </div>
        );
    }
    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                />

            </div>
        );
    }

    return (
        <div className={
            classNames(cls.ProfileCard, {}, [className])
        }
        >
            <div className={cls.data}>
                <Input
                    className={cls.input}
                    value={data?.firstname}
                    placeholder={t('Ваше имя')}
                    readonly={readonly}
                />
                <Input
                    className={cls.input}
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};
