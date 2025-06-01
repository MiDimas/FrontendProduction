import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { Profile } from '../../model/types/Profile';
import {ToggleFeatures} from "@/shared/lib/features";
import {
    ProfileCardDeprecated,
    ProfileCardDeprecatedError,
    ProfileCardDeprecatedLoading
} from '../ProfileCardDeprecated/ProfileCardDeprecated';
import {
    ProfileCardRedesigned,
    ProfileCardRedesignedError,
    ProfileCardRedesignedLoading
} from '../ProfileCardRedesigned/ProfileCardRedesigned';

export interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstname?: (value: string) => void;
    onChangeLastname?: (value: string) => void;
    onChangeAge?: (value: string | number) => void;
    onChangeCity?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeCurrency?: (value: Currency) => void;
    onChangeCountry?: (value: Country) => void;
}
export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        isLoading,
        error} = props;

    if (isLoading) {
        return (<ToggleFeatures feature="isRedesigned"
            off={<ProfileCardDeprecatedLoading className={className}/>}
            on={<ProfileCardRedesignedLoading className={className}/>}
            />
        );
    }
    if (error) {
        return (
            <ToggleFeatures feature="isRedesigned"
                off={
                    <ProfileCardDeprecatedError className={className}/>
                }
                on={
                    <ProfileCardRedesignedError className={className} />
                }
            />
        );
    }



    return (
        <ToggleFeatures
            feature="isRedesigned"
            off={<ProfileCardDeprecated {...props}/>}
            on={<ProfileCardRedesigned {...props} />} />
    );

};
