import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}
const ArticlesPage: FC<ArticlesPageProps> = (props) => {
    const { t } = useTranslation('article');
    const { className } = props;
    return (
        <div className={
            classNames(cls.ArticlesPage, {}, [className])
        }
        >
            {t('Страница статей')}
        </div>
    );
};

export default memo(ArticlesPage);
