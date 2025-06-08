import {memo} from "react";
import { useParams } from 'react-router-dom';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ArticleDetails } from '@/entities/Article';
import { ArticleRating } from '@/features/ArticleRating';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import cls from './ArticleDetailsPage.module.scss';
import {getFeatureFlags, ToggleFeatures} from '@/shared/lib/features';
import {StickyLayout} from "@/shared/layouts/StickyLayout";
import {DetailsContainer} from '../DetailsContainer/DetailsContainer';
import {AdditionalInfoContainer} from '../AdditionalInfoContainer/AdditionalInfoContainer';

interface ArticlesDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};
const ArticleDetailsPage = (props: ArticlesDetailsPageProps) => {
    const { className } = props;
    let { id } = useParams<{ id: string }>();
    const isArticleRating = getFeatureFlags('isArticleRatingEnabled');
    if (__PROJECT__ === 'storybook') {
        id = '1';
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <ToggleFeatures feature="isRedesigned"
            on={
                <StickyLayout
                    content={
                        <Page className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
                            <VStack max gap="32">
                                <DetailsContainer />
                                <ArticleRating articleId={id} />
                                <ArticleRecommendationsList />
                                <ArticleDetailsComments id={id} />
                            </VStack>
                        </Page>
                    }
                    right={<AdditionalInfoContainer />}
                />
            }
            off={
                <Page className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
                    <ArticleDetailsPageHeader />
                    <VStack max gap="32">
                        <ArticleDetails id={id} />
                        {isArticleRating &&
                            <ArticleRating articleId={id} /> }
                        <ArticleRecommendationsList />
                        <ArticleDetailsComments id={id} />
                    </VStack>
                </Page>
            } />
        </DynamicModuleLoader>
    );
};
export default memo(ArticleDetailsPage);
