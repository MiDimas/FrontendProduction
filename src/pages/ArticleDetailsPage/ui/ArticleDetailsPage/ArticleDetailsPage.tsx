import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleDetails } from '@/entities/Article';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page/Page';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import cls from './ArticleDetailsPage.module.scss';
import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleRating } from '@/features/ArticleRating';
import { VStack } from '@/shared/ui/Stack';

interface ArticlesDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};
const ArticleDetailsPage = (props:ArticlesDetailsPageProps) => {
    const { t } = useTranslation('article');
    const { className } = props;
    const { id } = useParams<{id: string}>();

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={
                classNames(cls.ArticlesDetailsPage, {}, [className])
            }
            >
                <ArticleDetailsPageHeader />
                <VStack max gap="32">
                    <ArticleDetails id={id} />
                    <ArticleRating articleId={id} />
                    <ArticleRecommendationsList />
                    <ArticleDetailsComments id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};
export default memo(ArticleDetailsPage);
