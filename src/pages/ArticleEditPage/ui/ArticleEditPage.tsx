import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page/Page';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
    const { t } = useTranslation();
    const { className } = props;
    const { id } = useParams();
    const isEdit = Boolean(id);
    const text = 'ARTICLE EDIT PAGE';
    const editing = `Editing article ${id || 'no'}`;
    return (
        <Page className={
            classNames(cls.ArticleEditPage, {}, [className])
        }
        >
            {isEdit ? editing : text}
        </Page>
    );
});
export default ArticleEditPage;
