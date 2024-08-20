import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { ArticleRating } from '@/features/ArticleRating';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';
import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import cls from './ArticleDetailsPage.module.scss';
import { getFeatureFlags, toggleFeatures } from '@/shared/lib/features';
import { Counter } from '@/entities/Counter';

interface ArticlesDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};
const ArticleDetailsPage = (props: ArticlesDetailsPageProps) => {
    const { t } = useTranslation('article');
    const { className } = props;
    let { id } = useParams<{ id: string }>();
    const isArticleRating = getFeatureFlags('isArticleRatingEnabled');
    const isCounter= getFeatureFlags('isCounterEnabled');
    if (__PROJECT__ === 'storybook') {
        id = '1';
    }

    const counter = toggleFeatures({
        name: "isCounterEnabled",
        // eslint-disable-next-line react/no-unstable-nested-components
        on: () => <Counter />,
        // eslint-disable-next-line react/no-unstable-nested-components
        off: () => <ArticleRating articleId={id} />
    })

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
                <ArticleDetailsPageHeader />
                <VStack max gap="32">
                    <ArticleDetails id={id} />
                    {counter}
                    {isArticleRating &&
                        <ArticleRating articleId={id} /> }
                    <ArticleRecommendationsList />
                    <ArticleDetailsComments id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};
export default memo(ArticleDetailsPage);
