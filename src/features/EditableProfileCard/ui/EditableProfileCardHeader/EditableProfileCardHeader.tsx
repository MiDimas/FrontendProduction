import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileAction } from '../../model/slice/profileSlice';
import {ToggleFeatures} from "@/shared/lib/features";
import {HStack} from "@/shared/ui/redesigned/Stack";
import {classNames} from "@/shared/lib/classNames/classNames";
import {Text as TextDeprecated} from "@/shared/ui/deprecated/Text";
import {Text} from "@/shared/ui/redesigned/Text";
import {Button as ButtonDeprecated, ButtonTheme} from "@/shared/ui/deprecated/Button";
import {Button} from "@/shared/ui/redesigned/Button";
import {Card} from "@/shared/ui/redesigned/Card";

interface EditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = ({ className }: EditableProfileCardHeaderProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const readonly = useSelector(getProfileReadonly);

    const onEdit = useCallback(() => {
        dispatch(profileAction.setReadOnly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileAction.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);
    return (
        <ToggleFeatures feature="isRedesigned"
            off={
                <HStack className={classNames('', {}, [className])} justify="between" align="center">
                    <TextDeprecated title={t('Профиль')} />
                    {readonly ? (
                        <ButtonDeprecated
                            theme={ButtonTheme.OUTLINE}
                            onClick={onEdit}
                            data-testid="EditableProfileCardHeader.EditBtn"
                        >
                            {t('Редактировать')}
                        </ButtonDeprecated>
                    ) : (
                        <HStack>
                            <ButtonDeprecated
                                theme={ButtonTheme.OUTLINE_RED}
                                onClick={onCancelEdit}
                                data-testid="EditableProfileCardHeader.CancelBtn"
                            >
                                {t('Отменить')}
                            </ButtonDeprecated>
                            <ButtonDeprecated
                                theme={ButtonTheme.OUTLINE}
                                onClick={onSave}
                                data-testid="EditableProfileCardHeader.SaveBtn"
                            >
                                {t('Сохранить')}
                            </ButtonDeprecated>
                        </HStack>
                    )}
                </HStack>
            }
            on={
                <Card borderForm="half-round" padding="24">
                    <HStack className={classNames('', {}, [className])} justify="between" align="center">
                        <Text title={t('Профиль')} />
                        {readonly ? (
                            <Button
                                variant="outline"
                                onClick={onEdit}
                                data-testid="EditableProfileCardHeader.EditBtn"
                            >
                                {t('Редактировать')}
                            </Button>
                        ) : (
                            <HStack>
                                <Button
                                    variant="outline"
                                    color="error"
                                    onClick={onCancelEdit}
                                    data-testid="EditableProfileCardHeader.CancelBtn"
                                >
                                    {t('Отменить')}
                                </Button>
                                <Button
                                    variant="outline"
                                    onClick={onSave}
                                    color="success"
                                    data-testid="EditableProfileCardHeader.SaveBtn"
                                >
                                    {t('Сохранить')}
                                </Button>
                            </HStack>
                        )}
                    </HStack>
                </Card>
            }
        />
        
    );
};
