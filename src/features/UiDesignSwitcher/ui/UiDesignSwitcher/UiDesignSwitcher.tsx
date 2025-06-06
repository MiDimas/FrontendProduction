import { useTranslation } from 'react-i18next';
import {memo, useState} from 'react';
import {useSelector} from "react-redux";
import {ListBox as ListBoxRedesigned} from "@/shared/ui/redesigned/Popups";
import {ListBox as ListBoxDeprecated} from "@/shared/ui/deprecated/Popups";
import {getFeatureFlags, toggleFeatures, updateFeatureFlags} from "@/shared/lib/features";
import {getUserAuthData} from "@/entities/User";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import {HStack} from "@/shared/ui/redesigned/Stack";
import {Skeleton as SkeletonRedesigned} from "@/shared/ui/redesigned/Skeleton";
import {Skeleton as SkeletonDeprecated} from "@/shared/ui/deprecated/Skeleton";
import {Text} from "@/shared/ui/redesigned/Text";


interface UiDesignSwitcherProps {
    className?: string;
}

export const UiDesignSwitcher = memo((props: UiDesignSwitcherProps) => {
    const { t } = useTranslation();
    const { className } = props;
    const isAppRedesigned = getFeatureFlags('isRedesigned');
    const authData = useSelector(getUserAuthData);
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const ListBox = toggleFeatures({
        name:"isRedesigned",
        on: () => ListBoxRedesigned,
        off: () => ListBoxDeprecated,
    })

    const Skeleton = toggleFeatures({
        name:"isRedesigned",
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated,
    })

    const items = [
        {
            content: 'Новый',
            value: 'new',
        },{
            content: 'Старый',
            value: 'old',
        },
    ]

    const onChange = async (value: string) => {
        if(!authData) return;
        setIsLoading(true);
        await dispatch(updateFeatureFlags({
            userId: authData?.id,
            newFeatures: {isRedesigned: value === 'new'}
        })).unwrap()
        setIsLoading(false);
    }

    return (
        <HStack gap="8" align="center">
            <Text text={t('Вариант интерфейса')} />
            {isLoading
            ? <Skeleton width={80} height={30}/>
            :<ListBox
                onChange={onChange}
                value={isAppRedesigned ? 'new' : 'old'}
                items={items}
                className={className}/>
            }
        </HStack>

    );
});
