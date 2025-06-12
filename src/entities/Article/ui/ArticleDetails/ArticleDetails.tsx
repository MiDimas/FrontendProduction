import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import CalendarIcon from '@/shared/assets/icons/calendar_icon.svg';
import EyeIcon from '@/shared/assets/icons/eye_icon.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { Text as TextDeprecated, TextAlign, TextSize, TextTheme } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { getArticleDetailsData } from '../../model/selectors/getArticleDetailsData/getArticleDetailsData';
import { getArticleDetailsError } from '../../model/selectors/getArticleDetailsError/getArticleDetailsError';
import {
    getArticleDetailsIsLoading
} from '../../model/selectors/getArticleDetailsIsLoading/getArticleDetailsIsLoading';
import { fetchArticleById } from '../../model/services/FetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import cls from './ArticleDetails.module.scss';
import {ToggleFeatures} from "@/shared/lib/features";
import {Skeleton as SkeletonDeprecated} from "@/shared/ui/deprecated/Skeleton";
import {Skeleton} from "@/shared/ui/redesigned/Skeleton";
import {renderArticleBlock} from './renderArticleBlock';
import {AppImage} from "@/shared/ui/redesigned/AppImage";

interface ArticleDetailsProps {
    className?: string;
    id?: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

const Deprecated = () => {
    const article = useSelector(getArticleDetailsData);

    return (
        <div data-testid="ArticleDetails.Info">
            <HStack justify="center">
                <AvatarDeprecated size={200} src={article?.img} className={cls.avatar}/>
            </HStack>
            <TextDeprecated
                className={cls.title}
                title={article?.title}
                text={article?.subtitle}
                size={TextSize.L}
            />
            <HStack align="center">
                <Icon Svg={EyeIcon}/>
                <TextDeprecated text={String(article?.views)}/>
            </HStack>
            <HStack align="center" className={cls.articleInfo}>
                <Icon Svg={CalendarIcon}/>
                <TextDeprecated text={article?.createdAt}/>
            </HStack>
            {article?.blocks.map(renderArticleBlock)}
        </div>
    )
}

const Redesigned = () => {
    const article = useSelector(getArticleDetailsData);
    return (
        <div data-testid="ArticleDetails.Info">
            <Text
                title={article?.title}
                size="l"
                bold
            />
            <Text
                title={article?.subtitle}
            />
            <AppImage src={article?.img} className={cls.img}
                      fallback={<Skeleton width="100%" height="420px" border="16px" />}
            />
            {article?.blocks.map(renderArticleBlock)}
        </div>
    )
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const {t} = useTranslation('article');
    const {className, id} = props;
    const dispatch = useAppDispatch();

    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);
    let content;

    if (isLoading) {
        content = (
            <div>
                <SkeletonDeprecated className={cls.avatar} width={200} height={200} border="50%" />
                <SkeletonDeprecated className={cls.title} width={300} height={32} />
                <SkeletonDeprecated className={cls.skeleton} width={600} height={24} />
                <SkeletonDeprecated className={cls.skeleton} width="100%" height={200} />
                <SkeletonDeprecated className={cls.skeleton} width="100%" height={200} />
            </div>
        );
    } else if (error) {
        content = (
            <TextDeprecated
                title={t('Произошла ошибка загрузки статьи')}
                align={TextAlign.CENTER}
                theme={TextTheme.ERROR}
            />
        );
    } else {
        content = (
            <ToggleFeatures feature="isRedesigned"
                on={<Redesigned />}
                off={<Deprecated />}
            />
        );
    }
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <VStack className={classNames(cls.ArticleDetails, {}, [className])}>{content}</VStack>
        </DynamicModuleLoader>
    );
});
