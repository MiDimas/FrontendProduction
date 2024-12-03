import { useTranslation } from 'react-i18next';
import { ArticleView } from '@/entities/Article';
import ListView from '@/shared/assets/icons/list_icon.svg';
import TilesView from '@/shared/assets/icons/tiles_icon.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { HStack } from '@/shared/ui/Stack';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TilesView,
    },
    {
        view: ArticleView.BIG,
        icon: ListView,
    },
];
export const ArticleViewSelector = (props: ArticleViewSelectorProps) => {
    const { t } = useTranslation();
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <HStack align="center" className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType, index) => (
                <Button
                    key={index}
                    onClick={onClick(viewType.view)}
                    theme={ButtonTheme.CLEAR}
                    className={cls.button}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames(cls.icon, {
                            [cls.notSelect]: viewType.view !== view,
                        })}
                        width={24}
                        height={24}
                    />
                </Button>
            ))}
        </HStack>
    );
};
