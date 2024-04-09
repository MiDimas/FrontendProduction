import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { useMemo } from 'react';
import { SortOrder } from 'shared/types';
import { VStack } from 'shared/ui/Stack';

import { ArticleSortField } from '../../model/consts/articleConsts';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
    const { t } = useTranslation();
    const {
        className, sort, order, onChangeOrder, onChangeSort,
    } = props;

    const orderOption = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('возрастанию'),
        },
        {
            value: 'desc',
            content: t('убыванию'),
        },
    ], [t]);

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('дате создания'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('названию'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('просмотрам'),
        },
    ], [t]);

    return (
        <VStack
            justify="start"
            align="baseline"
            gap="4"
            className={
                classNames('', {}, [className])
            }
        >
            <Select <ArticleSortField>
                options={sortFieldOptions}
                label={t('Сортировать ПО')}
                value={sort}
                onChange={onChangeSort}
            />
            <Select <SortOrder>
                options={orderOption}
                label={t('ПО')}
                value={order}
                onChange={onChangeOrder}
            />
        </VStack>
    );
};
