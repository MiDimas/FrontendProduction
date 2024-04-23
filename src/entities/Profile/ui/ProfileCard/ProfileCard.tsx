import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text/Text';
import { Input } from '@/shared/ui/Input/Input';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { Country, CountrySelect } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Profile } from '../../model/types/Profile';
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
export const ProfileCard = (props:ProfileCardProps) => {
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
            <HStack
                className={classNames(cls.ProfileCard, {}, [className])}
                justify="center"
                align="center"
                height={300}
            >
                <Loader />
            </HStack>
        );
    }
    if (error) {
        return (
            <HStack
                className={classNames(cls.ProfileCard, {}, [className])}
                justify="center"
                align="center"
                height={300}
            >
                <Text
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                />

            </HStack>
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
            <VStack>
                {data?.avatar
                    && (
                        <HStack justify="center" max>
                            <Avatar src={data?.avatar} alt={t('аватар')} />
                        </HStack>
                    )}
                <Input
                    value={data?.firstname}
                    placeholder={t('Ваше имя')}
                    readonly={readonly}
                    onChange={onChangeFirstname}
                    data-testid="ProfileCard.firstname"
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    readonly={readonly}
                    onChange={onChangeLastname}
                    data-testid="ProfileCard.lastname"
                />
                <Input
                    value={data?.age}
                    placeholder={t('Ваш возраст')}
                    readonly={readonly}
                    onChange={onChangeAge}
                />
                <Input
                    value={data?.city}
                    placeholder={t('Ваш город')}
                    readonly={readonly}
                    onChange={onChangeCity}
                />
                <Input
                    value={data?.username}
                    placeholder={t('Ваш ник')}
                    readonly={readonly}
                    onChange={onChangeUsername}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('Ваш аватар')}
                    readonly={readonly}
                    onChange={onChangeAvatar}
                />
                <CurrencySelect
                    readonly={readonly}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                />
                <CountrySelect
                    readonly={readonly}
                    value={data?.country}
                    onChange={onChangeCountry}
                />
            </VStack>
        </div>
    );
};
