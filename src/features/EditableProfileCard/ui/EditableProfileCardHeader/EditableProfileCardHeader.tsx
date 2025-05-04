import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Text } from '@/shared/ui/deprecated/Text';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileAction } from '../../model/slice/profileSlice';

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
        <HStack className={classNames('', {}, [className])} justify="between" align="center">
            <Text title={t('Профиль')} />
            {readonly ? (
                <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onEdit}
                    data-testid="EditableProfileCardHeader.EditBtn"
                >
                    {t('Редактировать')}
                </Button>
            ) : (
                <HStack>
                    <Button
                        theme={ButtonTheme.OUTLINE_RED}
                        onClick={onCancelEdit}
                        data-testid="EditableProfileCardHeader.CancelBtn"
                    >
                        {t('Отменить')}
                    </Button>
                    <Button
                        theme={ButtonTheme.OUTLINE}
                        onClick={onSave}
                        data-testid="EditableProfileCardHeader.SaveBtn"
                    >
                        {t('Сохранить')}
                    </Button>
                </HStack>
            )}
        </HStack>
    );
};
