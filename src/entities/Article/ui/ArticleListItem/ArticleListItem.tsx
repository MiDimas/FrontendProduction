import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleView } from '../../model/consts/articleConsts';
import { Article } from '../../model/types/article';
import {ToggleFeatures} from "@/shared/lib/features";
import {
    ArticleListItemDeprecated
} from './ArticleListItemDeprecated/ArticleListItemDeprecated';
import {
    ArticleListItemRedesigned
} from './ArticleListItemRedesigned/ArticleListItemRedesigned';

export interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    onClickItem?: () => void;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { className, article, view, target, onClickItem, ...otherProps } = props;
    const { t } = useTranslation('article');

    return (
        <ToggleFeatures feature="isRedesigned"
            off={<ArticleListItemDeprecated {...props} />}
            on={<ArticleListItemRedesigned {...props} />}
        />
    );
});
