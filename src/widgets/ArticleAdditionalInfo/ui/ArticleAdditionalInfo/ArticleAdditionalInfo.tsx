import {memo} from "react";
import {useTranslation} from "react-i18next";
import {HStack, VStack} from "@/shared/ui/redesigned/Stack";
import {Avatar} from "@/shared/ui/redesigned/Avatar";
import {User} from "@/entities/User";
import {Text} from "@/shared/ui/redesigned/Text";
import {Button} from "@/shared/ui/redesigned/Button";

interface ArticleAdditionalInfoProps {
    className?: string;
    author: User;
    createdAt: string;
    views: number;
    onEdit?: () => void;
    canEdit?: boolean;
}
export const ArticleAdditionalInfo = memo( (props: ArticleAdditionalInfoProps) => {
    const {className, author, views, createdAt,
    canEdit, onEdit} = props;
    const {t} = useTranslation();

    return (
        <VStack className={className} gap="16" max>
            <HStack align="center">
                <Avatar src={author.avatar} size={32}/>
                <Text text={author.username} bold/>
                <Text text={createdAt} />
            </HStack>
            <Button disabled={!canEdit} onClick={onEdit}>{t('Редактировать')}</Button>
            <Text text={t('{{count}} просмотров', {count: views})} />
        </VStack>
    )
})
