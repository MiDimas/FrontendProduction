import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import ListView from 'shared/assets/icons/list_icon.svg';
import TilesView from 'shared/assets/icons/tiles_icon.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '../../model/types/article';

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
export const ArticleViewSelector: FC<ArticleViewSelectorProps> = (props) => {
    const { t } = useTranslation();
    const {
        className,
        view,
        onViewClick,
    } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={
            classNames(cls.ArticleViewSelector, {}, [className])
        }
        >
            { viewTypes.map((viewType, index) => (
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
                    />
                </Button>
            ))}
        </div>
    );
};
