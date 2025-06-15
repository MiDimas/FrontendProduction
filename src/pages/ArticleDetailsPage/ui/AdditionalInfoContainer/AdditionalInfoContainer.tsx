import {memo, useCallback} from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Card} from "@/shared/ui/redesigned/Card";
import {ArticleAdditionalInfo} from "@/widgets/ArticleAdditionalInfo";
import {getArticleDetailsData} from "@/entities/Article";
import cls from './AdditionalInfoContainer.module.scss';
import {getCanEditArticle} from '../../model/selectors/article';
import {getRouteArticleEdit} from "@/shared/const/router";

export const AdditionalInfoContainer = memo( () => {
    const article = useSelector(getArticleDetailsData);
    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle);
    const onEditArticle = useCallback(() => {
        if (article?.id) {
            navigate(getRouteArticleEdit(article.id));
        }
    }, [navigate, article]);

    if (!article) {
        return null;
    }
    return (
        <Card className={cls.card} padding='24' borderForm='half-round'>
            <ArticleAdditionalInfo
                author={article.user}
                views={article.views}
                createdAt={article.createdAt}
                canEdit={canEdit}
                onEdit={onEditArticle}
            />
        </Card>
    )
})
