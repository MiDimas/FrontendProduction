import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string;
}

export const ArticleTextBlockComponent = (props: ArticleTextBlockComponentProps) => {
    const { t } = useTranslation('article');
    const { className } = props;
    return (
        <div className={
            classNames(cls.ArticleTextBlockComponent, {}, [className])
        }
        >
            {t('Статья')}
        </div>
    );
};
