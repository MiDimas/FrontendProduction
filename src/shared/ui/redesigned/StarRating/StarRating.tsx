import { memo, useCallback, useState } from 'react';
import StarIcon from '@/shared/assets/icons/star_icon.svg';
import StarIconNew from '@/shared/assets/icons/Star.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Icon } from '@/shared/ui/redesigned/Icon';
import cls from './StarRating.module.scss';
import {toggleFeatures, ToggleFeatures} from "@/shared/lib/features";

interface StarRatingProps {
    onSelect?: (value: number) => void;
    className?: string;
    selected?: number;
    size?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
    const { className, onSelect, size = 30, selected = 0 } = props;

    const [currentNum, setCurrentNum] = useState(selected);

    const onHovered = useCallback(
        (value: number) => {
            if (!selected) {
                return () => {
                    setCurrentNum(value);
                };
            }
            return () => {};
        },
        [setCurrentNum, selected],
    );

    const onLeave = useCallback(() => {
        if (!selected) {
            setCurrentNum(0);
        }
    }, [setCurrentNum, selected]);

    const onSelectHandler = useCallback(
        (value: number) => {
            if (onSelect) {
                return () => {
                    onSelect(value);
                };
            }
            return () => {};
        },
        [onSelect],
    );

    return (
        <div className={classNames(toggleFeatures({
            name:"isRedesigned",
            on: () => cls.starRatingRedesigned,
            off: () => cls.starRating
        }), {}, [className])}>
            {stars.map((value) => {
                const props = {
                    className: classNames(
                        cls.star,
                        {
                            [cls.normal]: value > currentNum,
                            [cls.selectable]: !selected,
                        },
                        [],
                    ),
                    Svg: toggleFeatures({
                        name:"isRedesigned",
                        on: () => StarIconNew,
                        off: () => StarIcon
                    }),
                    key: `star-${value}`,
                    height: size,
                    width: size,
                    onMouseEnter: onHovered(value),
                    onMouseLeave: onLeave,
                    onClick: onSelectHandler(value),
                    "data-testid": `StarRating.${value}`,
                    "data-selected": currentNum >= value,
                };

                return (<ToggleFeatures feature="isRedesigned"
                    off={
                        <IconDeprecated
                            {...props}
                        />
                    }
                    on={
                        <Icon
                            {...props}
                        />
                    }
                />)
            })}
        </div>
    );
});
