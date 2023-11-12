import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import cls from './AddCommentForm.module.scss';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../../model/slices/addCommentFormSlice';
import {
    getAddCommentFormError,
} from '../../model/selectors/getAddCommentFormError/getAddCommentFormError';
import {
    getAddCommentFormText,
} from '../../model/selectors/getAddCommentFormText/getAddCommentFormText';

interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = (props: AddCommentFormProps) => {
    const { t } = useTranslation();
    const { className, onSendComment } = props;
    const dispatch = useAppDispatch();
    const textForm = useSelector(getAddCommentFormText);
    const errorForm = useSelector(getAddCommentFormError);

    const onTextCommentChange = useCallback((text: string) => {
        dispatch(addCommentFormActions.setText(text));
    }, [dispatch]);
    const onSendHandler = useCallback(() => {
        onSendComment(textForm || '');
        dispatch(addCommentFormActions.setText(''));
    }, [dispatch, onSendComment, textForm]);
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={
                classNames(cls.AddCommentForm, {}, [className])
            }
            >
                <Input
                    className={cls.inputComment}
                    placeholder={t('Введите текст комментария')}
                    onChange={onTextCommentChange}
                    value={textForm}
                />
                <Button theme={ButtonTheme.OUTLINE} onClick={onSendHandler}>
                    {t('Отправить')}
                </Button>
            </div>
        </DynamicModuleLoader>

    );
};

export default AddCommentForm;
