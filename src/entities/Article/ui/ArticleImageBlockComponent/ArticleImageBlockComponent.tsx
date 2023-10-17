import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string;
}

export const ArticleImageBlockComponent = (props: ArticleImageBlockComponentProps) => {
    const { t } = useTranslation('article');
    const { className } = props;
    return (
        <div className={
            classNames(cls.ArticleImageBlockComponent, {}, [className])
        }
        >
            {t('Статья')}
        </div>
    );
};
