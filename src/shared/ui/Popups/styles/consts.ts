import { ListBoxOptionsDirection } from 'shared/types';
import cls from './popups.module.scss';

export const mapDirectionClasses: Record<ListBoxOptionsDirection, string> = {
    'bottom right': cls.optionBottomRight,
    'top right': cls.optionTopRight,
    'bottom left': cls.optionBottomLeft,
    'top left': cls.optionTopLeft,
};
