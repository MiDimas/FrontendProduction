import {VStack} from "@/shared/ui/redesigned/Stack";
import {ScrollToTopButton} from "@/features/ScrollToTopButton";
import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './ScrollToolbar.module.scss';

interface ScrollToolbarProps {
    className?: string;
    idElementToScroll?: string;
}
export const ScrollToolbar = (props: ScrollToolbarProps) => {
    const {className, idElementToScroll} = props;


    return <VStack
        justify="center"
        align="center"
        max
        className={classNames(cls.ScrollToolbar, {}, [className])}>
        <ScrollToTopButton element={idElementToScroll} />
    </VStack>
}