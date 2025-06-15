import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { Input } from '@/shared/ui/redesigned/Input';
import { getAddCommentFormError } from '../../model/selectors/getAddCommentFormError/getAddCommentFormError';
import { getAddCommentFormText } from '../../model/selectors/getAddCommentFormText/getAddCommentFormText';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../../model/slices/addCommentFormSlice';
import cls from './AddCommentForm.module.scss';
import {ToggleFeatures} from "@/shared/lib/features";
import {Card} from "@/shared/ui/redesigned/Card";

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

    const onTextCommentChange = useCallback(
        (text: string) => {
            dispatch(addCommentFormActions.setText(text));
        },
        [dispatch],
    );
    const onSendHandler = useCallback(() => {
        onSendComment(textForm || '');
        dispatch(addCommentFormActions.setText(''));
    }, [dispatch, onSendComment, textForm]);
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <ToggleFeatures feature="isRedesigned"
                off={
                    <HStack
                        justify="between"
                        align="center"
                        max
                        className={classNames(cls.AddCommentForm, {}, [className])}
                        data-testid="AddCommentForm"
                    >
                        <InputDeprecated
                            className={cls.inputComment}
                            placeholder={t('Введите текст комментария')}
                            onChange={onTextCommentChange}
                            value={textForm}
                            data-testid="AddCommentForm.Input"
                        />
                        <ButtonDeprecated
                            data-testid="AddCommentForm.Button"
                            theme={ButtonTheme.OUTLINE}
                            onClick={onSendHandler}
                        >
                            {t('Отправить')}
                        </ButtonDeprecated>
                    </HStack>
                }
                on={
                    <Card>
                        <HStack
                            justify="between"
                            align="center"
                            max
                            className={classNames(cls.AddCommentForm, {}, [className])}
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
                                variant="outline"
                                onClick={onSendHandler}

                            >
                                {t('Отправить')}
                            </Button>
                        </HStack>
                    </Card>

                }
            />
        </DynamicModuleLoader>
    );
};

export default AddCommentForm;
