import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ArticleSortField } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SortOrder } from '@/shared/types';
import { Select, SelectOption } from '@/shared/ui/deprecated/Select';
import {ToggleFeatures} from "@/shared/lib/features";
import {ListBox} from "@/shared/ui/redesigned/Popups";
import {Text} from "@/shared/ui/redesigned/Text";

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
    const { t } = useTranslation();
    const { className, sort, order, onChangeOrder, onChangeSort } = props;

    const orderOption = useMemo<SelectOption<SortOrder>[]>(
        () => [
            {
                value: 'asc',
                content: t('возрастанию'),
            },
            {
                value: 'desc',
                content: t('убыванию'),
            },
        ],
        [t],
    );

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
        () => [
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
        ],
        [t],
    );

    return (
        <ToggleFeatures feature="isRedesigned"
            off={
                <VStack
                    justify="start"
                    align="baseline"
                    gap="4"
                    className={classNames('', {}, [className])}
                >
                    <Select<ArticleSortField>
                        options={sortFieldOptions}
                        label={t('Сортировать по:')}
                        value={sort}
                        onChange={onChangeSort}
                    />
                    <Select<SortOrder>
                        options={orderOption}
                        label={t('ПО')}
                        value={order}
                        onChange={onChangeOrder}
                    />
                </VStack>
            }
            on={
                <VStack
                    justify="start"
                    align="baseline"
                    gap="8"
                    className={classNames('', {}, [className])}
                >
                    <Text text={t('Сортировать по:')} />
                    <ListBox
                        items={sortFieldOptions}
                        value={sort}
                        onChange={onChangeSort}
                    />
                    <ListBox
                        items={orderOption}
                        value={order}
                        onChange={onChangeOrder}
                    />
                </VStack>
            }   />


    );
};
