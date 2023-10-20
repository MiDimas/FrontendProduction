import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import cls from './ArticleDetailsPage.module.scss';

interface ArticlesDetailsPageProps {
    className?: string;
}
const ArticleDetailsPage: FC<ArticlesDetailsPageProps> = (props) => {
    const { t } = useTranslation('article');
    const { className } = props;
    const { id } = useParams<{id: string}>();
    return (
        <div className={
            classNames(cls.ArticlesDetailsPage, {}, [className])
        }
        >
            {
                id
                    ? <ArticleDetails id={id} />
                    : <div>{t('Статья не найдена')}</div>
            }

        </div>
    );
};
export default memo(ArticleDetailsPage);
