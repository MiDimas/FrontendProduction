import {useTranslation} from "react-i18next";
import {classNames, Mods} from "@/shared/lib/classNames/classNames";
import cls from '../ProfileCard/ProfileCard.module.scss';
import {HStack, VStack} from "@/shared/ui/redesigned/Stack";
import {Avatar as AvatarDeprected} from "@/shared/ui/deprecated/Avatar";
import {Input as InputDeprecated} from "@/shared/ui/deprecated/Input";
import {CurrencySelect} from "@/entities/Currency";
import {CountrySelect} from "@/entities/Country";
import type {ProfileCardProps} from '../ProfileCard/ProfileCard';
import {Loader} from "@/shared/ui/deprecated/Loader";
import {Text, TextAlign, TextTheme} from "@/shared/ui/deprecated/Text";


export const ProfileCardDeprecatedLoading = ({className}: {className?: string}) => (
    <HStack
        className={classNames(cls.ProfileCard, {}, [className])}
        justify="center"
        align="center"
        height={300}
    >
        <Loader />
    </HStack>
    )
export const ProfileCardDeprecatedError = ({className}: {className?: string}) => {
    const {t} = useTranslation('profile');
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
    )
}


export const ProfileCardDeprecated = (props: ProfileCardProps) => {
    const {
        className,
        data,
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
    const {t} = useTranslation('profile');
    const mods: Mods = {
        [cls.editing]: !readonly,
    };
    return (<div className={classNames(cls.ProfileCard, mods, [className])}>
        <VStack>
            <HStack justify="center" max>
                <AvatarDeprected src={data?.avatar} alt={t('аватар')}/>
            </HStack>
            <InputDeprecated
                value={data?.firstname}
                placeholder={t('Ваше имя')}
                readonly={readonly}
                onChange={onChangeFirstname}
                data-testid="ProfileCard.firstname"
            />
            <InputDeprecated
                value={data?.lastname}
                placeholder={t('Ваша фамилия')}
                readonly={readonly}
                onChange={onChangeLastname}
                data-testid="ProfileCard.lastname"
            />
            <InputDeprecated
                value={data?.age}
                placeholder={t('Ваш возраст')}
                readonly={readonly}
                onChange={onChangeAge}
            />
            <InputDeprecated
                value={data?.city}
                placeholder={t('Ваш город')}
                readonly={readonly}
                onChange={onChangeCity}
            />
            <InputDeprecated
                value={data?.username}
                placeholder={t('Ваш ник')}
                readonly={readonly}
                onChange={onChangeUsername}
            />
            <InputDeprecated
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
    </div>)
}