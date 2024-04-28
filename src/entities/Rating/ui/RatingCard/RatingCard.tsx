import { useTranslation } from 'react-i18next';
import {
    memo, useCallback, useMemo, useState,
} from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { Card } from '@/shared/ui/Card/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Input } from '@/shared/ui/Input/Input';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RatingCard.module.scss';
import { Drawer } from '@/shared/ui/Drawer/Drawer';

interface RatingCardProps {
    className?: string;
    hasFeedback?: boolean;
    title?: string;
    feedBackTitle?: string;
    onAccept?: (starsCount:number, feedback?:string)=>void;
    onCancel?: (starsCount: number) => void;
    rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const { t } = useTranslation();
    const {
        className,
        hasFeedback,
        title,
        feedBackTitle,
        onAccept,
        onCancel,
        rate = 0,
    } = props;

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const onClose = useCallback(() => {
        if (onCancel) {
            onCancel(starsCount);
        }
        setIsOpenModal(false);
    }, [onCancel, starsCount]);

    const onSelect = useCallback((value: number) => {
        if (!starsCount) {
            setStarsCount(value);
            if (!hasFeedback) {
                onAccept?.(value);
            } else {
                setIsOpenModal(true);
            }
        }
    }, [hasFeedback, onAccept, starsCount]);

    const onAcceptHandler = useCallback(() => {
        setIsOpenModal(false);
        onAccept?.(starsCount, feedback);
    }, [starsCount, onAccept, feedback]);

    const content = useMemo(
        () => (
            <>
                <Text title={feedBackTitle} />
                <Input placeholder={t('Напишите отзыв')} value={feedback} onChange={setFeedback} />
            </>
        ),
        [feedback, feedBackTitle, t],
    );
    return (
        <Card className={classNames(cls.RatingCard, {}, [className])}>
            <VStack align="center" gap="8" max>
                <Text title={title || t('Поставьте оценку')} />
                <StarRating selected={starsCount} onSelect={onSelect} />
                { hasFeedback
                    && (
                        <>
                            <BrowserView>
                                <Modal
                                    onClose={onClose}
                                    isOpen={isOpenModal}
                                    lazy
                                    className={cls.modal}
                                >
                                    <VStack max>
                                        {content}
                                        <HStack max gap="8" justify="end">
                                            <Button
                                                onClick={onClose}
                                                theme={ButtonTheme.OUTLINE_RED}
                                            >
                                                {t('Закрыть')}
                                            </Button>
                                            <Button
                                                onClick={onAcceptHandler}
                                            >
                                                {t('Отправить')}
                                            </Button>
                                        </HStack>
                                    </VStack>
                                </Modal>
                            </BrowserView>
                            <MobileView>
                                <Drawer onClose={onClose} lazy isOpen={isOpenModal}>
                                    <VStack>
                                        {content}
                                        <Button
                                            onClick={onAcceptHandler}
                                            fullWidth
                                        >
                                            {t('Отправить')}
                                        </Button>
                                    </VStack>
                                </Drawer>
                            </MobileView>
                        </>

                    )}
            </VStack>
        </Card>
    );
});
