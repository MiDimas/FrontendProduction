import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import cls from './ArticleDetails.module.scss';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';

interface ArticleDetailsProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};
export const ArticleDetails = (props: ArticleDetailsProps) => {
    const { t } = useTranslation('article');
    const { className } = props;
    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={
                classNames(cls.ArticleDetails, {}, [className])
            }
            >
                {t('Статья')}
            </div>
        </DynamicModuleLoader>
    );
};
