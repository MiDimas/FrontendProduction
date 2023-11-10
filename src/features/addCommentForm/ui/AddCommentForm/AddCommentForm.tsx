import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './AddCommentForm.module.scss';

interface AddCommentFormProps {
    className?: string;
}

export const AddCommentForm = (props: AddCommentFormProps) => {
    const { t } = useTranslation();
    const { className } = props;
    return (
        <div className={
            classNames(cls.AddCommentForm, {}, [className])
        }
        >
            <Input className={cls.inputComment} placeholder={t('Введите текст комментария')} />
            <Button theme={ButtonTheme.OUTLINE}>
                {t('Отправить')}
            </Button>
        </div>
    );
};
