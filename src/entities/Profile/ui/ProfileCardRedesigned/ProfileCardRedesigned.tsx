import {useTranslation} from "react-i18next";
import type {ProfileCardProps} from '../ProfileCard/ProfileCard';
import {HStack, VStack} from "@/shared/ui/redesigned/Stack";
import {Avatar} from "@/shared/ui/redesigned/Avatar";
import {Input} from "@/shared/ui/redesigned/Input";
import {CurrencySelect} from "@/entities/Currency";
import {CountrySelect} from "@/entities/Country";
import {Card} from "@/shared/ui/redesigned/Card";
import {Skeleton} from "@/shared/ui/redesigned/Skeleton";
import {classNames} from "@/shared/lib/classNames/classNames";
import cls from '../ProfileCard/ProfileCard.module.scss';
import {Text} from "@/shared/ui/redesigned/Text";

export const ProfileCardRedesignedLoading = ({className}: {className?: string}) => (
    <Card className={className} padding="24">
        <VStack max>
            <HStack justify="center" max>
                <Skeleton border="100%" height={128} width={128}/>
            </HStack>
            <HStack gap='24' max>
                <VStack gap='16' max>
                    <Skeleton width='100%' height={38}/>
                    <Skeleton width='100%' height={38}/>
                    <Skeleton width='100%' height={38}/>
                    <Skeleton width='100%' height={38}/>
                </VStack>
                <VStack gap='16' max>
                    <Skeleton width='100%' height={38}/>
                    <Skeleton width='100%' height={38}/>
                    <Skeleton width='100%' height={38}/>
                    <Skeleton width='100%' height={38}/>
                </VStack>
            </HStack>
        </VStack>
    </Card>
);

export const ProfileCardRedesignedError = ({className}: {className?: string}) => {
    const {t} = useTranslation('profile');
    return (
        <HStack
            className={classNames(cls.ProfileCard, {}, [className])}
            justify="center"
            align="center"
            height={300}
        >
            <Text
                align='center'
                variant='error'
                title={t('Произошла ошибка при загрузке профиля')}
                text={t('Попробуйте обновить страницу')}
            />
        </HStack>
    )
}

export const ProfileCardRedesigned = (props: ProfileCardProps) => {
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
    return (
        <Card className={className}
              padding="24">
            <VStack>
                <HStack justify="center" max>
                    <Avatar src={data?.avatar} alt={t('аватар')} size={128}/>
                </HStack>
                <HStack gap="24" max>
                    <VStack gap='16' max>
                        <Input
                            value={data?.firstname}
                            label={t('Имя')}
                            readonly={readonly}
                            onChange={onChangeFirstname}
                            data-testid="ProfileCard.firstname"
                        />
                        <Input
                            value={data?.lastname}
                            label={t('Фамилия')}
                            readonly={readonly}
                            onChange={onChangeLastname}
                            data-testid="ProfileCard.lastname"
                        />
                        <Input
                            value={data?.age}
                            label={t('Возраст')}
                            readonly={readonly}
                            onChange={onChangeAge}
                        />
                        <Input
                            value={data?.city}
                            label={t('Город')}
                            readonly={readonly}
                            onChange={onChangeCity}
                        />
                    </VStack>
                    <VStack gap="16" max>
                        <Input
                            value={data?.username}
                            label={t('Ник')}
                            readonly={readonly}
                            onChange={onChangeUsername}
                        />
                        <Input
                            value={data?.avatar}
                            label={t('Аватар')}
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
                </HStack>
            </VStack>
        </Card>
    )
}