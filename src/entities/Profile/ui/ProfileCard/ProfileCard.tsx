import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from 'entities/Profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstname?: (value:string)=>void;
    onChangeLastname?: (value:string)=>void;
    onChangeAge?: (value: string|number)=>void;
    onChangeCity?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeCurrency?: (value: Currency) => void;
    onChangeCountry?: (value: Country) => void;
}
export const ProfileCard: FC<ProfileCardProps> = (props) => {
    const { t } = useTranslation('profile');
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
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

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <div className={
            classNames(cls.ProfileCard, mods, [className])
        }
        >
            <div className={cls.data}>
                {data?.avatar
                    && (
                        <div className={cls.avatarWrapper}>
                            <Avatar src={data?.avatar} alt={t('аватар')} />
                        </div>
                    )}
                <Input
                    className={cls.input}
                    value={data?.firstname}
                    placeholder={t('Ваше имя')}
                    readonly={readonly}
                    onChange={onChangeFirstname}
                />
                <Input
                    className={cls.input}
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    readonly={readonly}
                    onChange={onChangeLastname}
                />
                <Input
                    className={cls.input}
                    value={data?.age}
                    placeholder={t('Ваш возраст')}
                    readonly={readonly}
                    onChange={onChangeAge}
                />
                <Input
                    className={cls.input}
                    value={data?.city}
                    placeholder={t('Ваш город')}
                    readonly={readonly}
                    onChange={onChangeCity}
                />
                <Input
                    className={cls.input}
                    value={data?.username}
                    placeholder={t('Ваш ник')}
                    readonly={readonly}
                    onChange={onChangeUsername}
                />
                <Input
                    className={cls.input}
                    value={data?.avatar}
                    placeholder={t('Ваш аватар')}
                    readonly={readonly}
                    onChange={onChangeAvatar}
                />
                <CurrencySelect
                    className={cls.input}
                    readonly={readonly}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                />
                <CountrySelect
                    className={cls.input}
                    readonly={readonly}
                    value={data?.country}
                    onChange={onChangeCountry}
                />
            </div>
        </div>
    );
};
