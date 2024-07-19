import { memo, useCallback, useState } from 'react';
import StarIcon from '@/shared/assets/icons/star_icon.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/Icon';
import cls from './StarRating.module.scss';

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
        <div className={classNames(cls.starRating, {}, [className])}>
            {stars.map((value) => (
                <Icon
                    className={classNames(
                        cls.star,
                        {
                            [cls.normal]: value > currentNum,
                            [cls.selectable]: !selected,
                        },
                        [],
                    )}
                    Svg={StarIcon}
                    key={`star-${value}`}
                    height={size}
                    width={size}
                    onMouseEnter={onHovered(value)}
                    onMouseLeave={onLeave}
                    onClick={onSelectHandler(value)}
                    data-testid={`StarRating.${value}`}
                    data-selected={currentNum >= value}
                />
            ))}
        </div>
    );
});
