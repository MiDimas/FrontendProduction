import {memo} from "react";
import {ArticlesFilters} from "@/widgets/ArticlesFilters";
import {useArticleFilters} from '../../lib/hooks/useArticleFilters';

interface FiltersContainerProps {
    className?: string;
}

export const FiltersContainer = memo( (props: FiltersContainerProps) => {
    const { className } = props;
    const {
        sort,
        order,
        search,
        type,
        onChangeSort,
        onChangeOrder,
        onChangeType,
        onChangeSearch,
    } = useArticleFilters();

     return (
         <ArticlesFilters sort={sort} order={order} onChangeOrder={onChangeOrder} onChangeSort={onChangeSort}
            type={type} onChangeType={onChangeType}
            search={search} onChangeSearch={onChangeSearch} className={className}
         />
     )
})