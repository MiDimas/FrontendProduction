import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Page } from 'widgets/Page/Page';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
    const { t } = useTranslation();
    const { className } = props;
    const text = 'ARTICLE EDIT PAGE';
    return (
        <Page className={
            classNames(cls.ArticleEditPage, {}, [className])
        }
        >
            {text}
        </Page>
    );
});
export default ArticleEditPage;
