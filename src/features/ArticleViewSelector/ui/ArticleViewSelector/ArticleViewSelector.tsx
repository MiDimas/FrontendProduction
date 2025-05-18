import { useTranslation } from 'react-i18next';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { ArticleView } from '@/entities/Article';
import ListViewDeprecated from '@/shared/assets/icons/list_icon.svg';
import TilesViewDeprecated from '@/shared/assets/icons/tiles_icon.svg';
import ListView from '@/shared/assets/icons/List.svg';
import TilesView from '@/shared/assets/icons/Tiles.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import cls from './ArticleViewSelector.module.scss';
import {ToggleFeatures, toggleFeatures} from "@/shared/lib/features";
import {Icon} from "@/shared/ui/redesigned/Icon";
import {Card} from "@/shared/ui/redesigned/Card";

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: toggleFeatures({
            name: 'isRedesigned',
            on: () => TilesView,
            off: () => TilesViewDeprecated
        })
    },
    {
        view: ArticleView.BIG,
        icon: toggleFeatures({
            name: 'isRedesigned',
            on: () => ListView,
            off: () => ListViewDeprecated
        })
    },
];
export const ArticleViewSelector = (props: ArticleViewSelectorProps) => {
    const { t } = useTranslation();
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <ToggleFeatures feature='isRedesigned'
            off={
                <HStack align="center" className={classNames(cls.ArticleViewSelector, {}, [className])}>
                    {viewTypes.map((viewType, index) => (
                        <ButtonDeprecated
                            key={index}
                            onClick={onClick(viewType.view)}
                            theme={ButtonTheme.CLEAR}
                            className={cls.button}
                        >
                            <IconDeprecated
                                Svg={viewType.icon}
                                className={classNames(cls.icon, {
                                    [cls.notSelect]: viewType.view !== view,
                                })}
                                width={24}
                                height={24}
                            />
                        </ButtonDeprecated>
                    ))}
                </HStack>
            }
            on={
                <Card
                    className={classNames(cls.ArticleViewSelectorRedesigned, {}, [className])}
                    borderForm='round'
                >
                    <HStack align="center" gap='8'>
                        {viewTypes.map((viewType, index) => (
                            <Icon
                                Svg={viewType.icon}
                                className={classNames(cls.icon, {
                                    [cls.notSelect]: viewType.view !== view,
                                })}
                                key={index}
                                width={24}
                                height={24}
                                clickable
                                onClick={onClick(viewType.view)}
                            />

                        ))}
                    </HStack>
                </Card>
            }/>
    );
};
