import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/Input';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { HStack } from '@/shared/ui/Stack';
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
            <HStack
                justify="between"
                align="center"
                max
                className={
                    classNames(cls.AddCommentForm, {}, [className])
                }
                data-testid="AddCommentForm"
            >
                <Input
                    className={cls.inputComment}
                    placeholder={t('Введите текст комментария')}
                    onChange={onTextCommentChange}
                    value={textForm}
                    data-testid="AddCommentForm.Input"
                />
                <Button
                    data-testid="AddCommentForm.Button"
                    theme={ButtonTheme.OUTLINE}
                    onClick={onSendHandler}
                >
                    {t('Отправить')}
                </Button>
            </HStack>
        </DynamicModuleLoader>

    );
};

export default AddCommentForm;
