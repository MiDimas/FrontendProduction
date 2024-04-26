import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { Card } from '@/shared/ui/Card/Card';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Input } from '@/shared/ui/Input/Input';
import { Button } from '@/shared/ui/Button/Button';

interface RatingCardProps {
    className?: string;
    hasFeedback?: boolean;
    title?: string;
    feedBackTitle?: string;
    onAccept?: (starsCount:number, feedback?:string)=>void;
    onCancel?: (starsCount: number) => void;
}

export const RatingCard = (props: RatingCardProps) => {
    const { t } = useTranslation();
    const {
        className,
        hasFeedback,
        title,
        feedBackTitle,
        onAccept,
        onCancel,
    } = props;

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [starsCount, setStarsCount] = useState(0);

    const onClose = useCallback(() => {
        if (onCancel) {
            onCancel(starsCount);
        }
        setIsOpenModal(false);
    }, [onCancel, setIsOpenModal, starsCount]);

    const onSelect = useCallback((value: number) => {
        setStarsCount(value);
        if (!hasFeedback) {
            onAccept?.(value);
        } else {
            setIsOpenModal(true);
        }
    }, [hasFeedback, setStarsCount, onAccept]);
    return (
        <Card>
            <VStack align="center" gap="8" max>
                <Text title={title || t('Поставьте оценку')} />
                <StarRating selected={starsCount} onSelect={onSelect} />
                <Modal onClose={onClose} isOpen={isOpenModal} lazy>
                    <Text text={feedBackTitle} />
                    <Input placeholder={t('Напишите отзыв')} />
                    <VStack max gap="8">
                        <Button>{t('Отправить')}</Button>
                        <Button onClick={onClose}>{t('Закрыть')}</Button>
                    </VStack>
                </Modal>
            </VStack>
        </Card>
    );
};
