import {useCallback} from "react";
import {Icon} from "@/shared/ui/redesigned/Icon";
import Arrow from "@/shared/assets/icons/ArrowCircle.svg";

interface ScrollToTopButtonProps {
    className?: string;
    element?: string;
}
export const ScrollToTopButton = (props: ScrollToTopButtonProps) => {
    const {className, element} = props

    const onClickHandler = useCallback(() => {
        if(element){
            const elem = document.getElementById(element);
            if (elem){
                elem.scrollTo({top:0, behavior: "smooth"});
                return;
            }
        }
        window.scrollTo({top: 0, behavior: 'smooth'})

    }, [element])

    return <Icon
        Svg={Arrow}
        onClick={onClickHandler}
        clickable
        className={className}
    />
}