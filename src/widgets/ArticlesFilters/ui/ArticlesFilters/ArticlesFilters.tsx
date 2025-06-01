import {useTranslation} from 'react-i18next';
import {memo} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './ArticlesFilters.module.scss';
import {Card} from "@/shared/ui/redesigned/Card";
import {HStack, VStack} from "@/shared/ui/redesigned/Stack";
import {ArticleSortSelector} from "@/features/ArticleSortSelector";
import {Input} from "@/shared/ui/redesigned/Input";
import {ArticleTypeTabs} from "@/features/ArticleTypeTabs";
import {ArticleSortField, ArticleType} from "@/entities/Article";
import {SortOrder} from "@/shared/types";
import {TabItem} from "@/shared/ui/deprecated/Tabs";
import SearchIcon from "@/shared/assets/icons/Search.svg";
import {Icon} from "@/shared/ui/redesigned/Icon";

interface ArticleFiltersProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
    search?: string | number;
    onChangeSearch?: (value: string) => void;
    type: ArticleType;
    onChangeType: (tab: TabItem<ArticleType>) => void;
}

export const ArticlesFilters = memo((props: ArticleFiltersProps) => {
    const {t} = useTranslation();
    const {className,
        sort,
        order,
        onChangeOrder,
        onChangeSort,
        search,
        onChangeSearch,
        type,
        onChangeType,
    } = props;
    return (
        <Card className={
            classNames(cls.ArticleFilters, {}, [className])
        }
              padding='24'
        >
            <VStack gap="32" >
                <Input placeholder={t('Поиск')}
                       onChange={onChangeSearch} value={search}
                       addonLeft={<Icon Svg={SearchIcon} /> }
                       size="s"
                />
                <ArticleTypeTabs value={type} onChangeType={onChangeType} className={cls.tabs} />
                <HStack align="center" justify="between" className={cls.sortWrapper}>
                    <ArticleSortSelector
                        sort={sort}
                        order={order}
                        onChangeOrder={onChangeOrder}
                        onChangeSort={onChangeSort}
                    />
                </HStack>
        </VStack>
        </Card>
    );
});
