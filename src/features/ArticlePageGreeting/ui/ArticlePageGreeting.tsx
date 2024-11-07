import {memo, useCallback, useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {Modal} from "@/shared/ui/Modal";
import {saveJsonSettings, useJsonSettings} from "@/entities/User";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import {Text} from "@/shared/ui/Text";

interface ArticlePageGreetingProps {
    className?: string;
}
export const ArticlePageGreeting = memo((props: ArticlePageGreetingProps) => {
    const {
        className
    } = props;
    const {t} = useTranslation('article');
    const [isOpen, setIsOpen] = useState(false);
    const {isArticlePageWasOpened} = useJsonSettings();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(!isArticlePageWasOpened){
            setIsOpen(true);
            dispatch(saveJsonSettings({isArticlePageWasOpened: true}));
        }
    }, [isArticlePageWasOpened, dispatch])

    const closeCallback = useCallback(() => setIsOpen(false), [])

    return (
        <Modal lazy isOpen={isOpen} onClose={closeCallback}>
            <Text
                className={className}
                title={t("Добро пожаловать на страницу статей")}
                text={t("Здесь вы можете искать и просматривать различные статьи")}
            />
        </Modal>
    );
})