import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './EditableProfileCardHeader.module.scss';

interface EditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = ({ className }: EditableProfileCardHeaderProps) => {
    const { t } = useTranslation('profile');

    return (
        <div className={classNames(cls.EditableProfileCardHeader, {}, [className])}>
            <Text title={t('Профиль')} />
            <Button
                className={cls.editBtn}
                theme={ButtonTheme.OUTLINE}
            >
                {t('Редактировать')}
            </Button>
        </div>
    );
};
