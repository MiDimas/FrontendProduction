import { useMemo } from 'react';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleType } from '../../model/types/article';

export interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (tab: TabItem<ArticleType>) => void;
}
export const ArticleTypeTabs = (props: ArticleTypeTabsProps) => {
    const {
        className,
        value,
        onChangeType,
    } = props;
    const { t } = useTranslation('article');

    const typeTabs = useMemo<TabItem<ArticleType>[]>(() => [
        {
            value: ArticleType.ALL,
            content: t('Все статьи'),
        },
        {
            value: ArticleType.IT,
            content: t('Айти'),
        },
        {
            value: ArticleType.ECONOMICS,
            content: t('Экономика'),
        },
        {
            value: ArticleType.SCIENCE,
            content: t('Наука'),
        },
    ], [t]);
    return (
        <Tabs
            tabs={typeTabs}
            value={value}
            onTabClick={onChangeType}
            className={classNames('', {}, [className])}
        />
    );
};
