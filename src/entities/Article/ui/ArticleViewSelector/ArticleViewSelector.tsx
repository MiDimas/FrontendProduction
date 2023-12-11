import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleView } from '../../model/types/article';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
    },
    {
        view: ArticleView.BIG,
    },
];
export const ArticleViewSelector: FC<ArticleViewSelectorProps> = (props) => {
    const { t } = useTranslation();
    const { className } = props;
    return (
        <div className={
            classNames(cls.ArticleViewSelector, {}, [className])
        }
        />
    );
};
