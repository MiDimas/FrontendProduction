import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleBlockComponent.module.scss';

interface ArticleBlockComponentProps {
    className?: string;
}
export const ArticleBlockComponent: FC<ArticleBlockComponentProps> = (props) => {
    const { t } = useTranslation('article');
    const { className } = props;
    return (
        <div className={
            classNames(cls.ArticleBlockComponent, {}, [className])
        }
        >
            {t('Статья')}
        </div>
    );
};
