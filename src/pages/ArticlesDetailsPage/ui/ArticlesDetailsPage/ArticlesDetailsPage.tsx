import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesDetailsPage.module.scss';

interface ArticlesDetailsPageProps {
    className?: string;
}
export const ArticlesDetailsPage: FC<ArticlesDetailsPageProps> = (props) => {
    const { t } = useTranslation('article');
    const { className } = props;
    return (
        <div className={
            classNames(cls.ArticlesDetailsPage, {}, [className])
        }
        >
            {t('Статья')}
        </div>
    );
};
