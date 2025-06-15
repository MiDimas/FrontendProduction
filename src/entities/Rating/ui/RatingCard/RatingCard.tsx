import { memo, useCallback, useMemo, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useTranslation } from 'react-i18next';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { Modal } from '@/shared/ui/redesigned/Modal';
import {HStack, VStack} from '@/shared/ui/redesigned/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import {Button as ButtonDeprecated, ButtonTheme} from '@/shared/ui/deprecated/Button';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Card } from '@/shared/ui/redesigned/Card';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Input } from '@/shared/ui/redesigned/Input';
import { StarRating } from '@/shared/ui/redesigned/StarRating';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import cls from './RatingCard.module.scss';
import {ToggleFeatures} from "@/shared/lib/features";

interface RatingCardProps {
    className?: string;
    hasFeedback?: boolean;
    title?: string;
    feedBackTitle?: string;
    onAccept?: (starsCount: number, feedback?: string) => void;
    onCancel?: (starsCount: number) => void;
    rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const { t } = useTranslation();
    const { className, hasFeedback, title, feedBackTitle, onAccept, onCancel, rate = 0 } = props;

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const onClose = useCallback(() => {
        if (onCancel) {
            onCancel(starsCount);
        }
        setIsOpenModal(false);
    }, [onCancel, starsCount]);

    const onSelect = useCallback(
        (value: number) => {
            if (!starsCount) {
                setStarsCount(value);
                if (!hasFeedback) {
                    onAccept?.(value);
                } else {
                    setIsOpenModal(true);
                }
            }
        },
        [hasFeedback, onAccept, starsCount],
    );

    const onAcceptHandler = useCallback(() => {
        setIsOpenModal(false);
        onAccept?.(starsCount, feedback);
    }, [starsCount, onAccept, feedback]);

    const content = useMemo(
        () => (
            <ToggleFeatures feature="isRedesigned"
                on={
                    <>
                        <Text title={feedBackTitle} />
                        <Input
                            placeholder={t('Напишите отзыв')}
                            value={feedback}
                            onChange={setFeedback}
                            data-testid="RatingCard.Input"
                        />
                    </>
                }
                off={
                    <>
                        <TextDeprecated title={feedBackTitle} />
                        <InputDeprecated
                            placeholder={t('Напишите отзыв')}
                            value={feedback}
                            onChange={setFeedback}
                            data-testid="RatingCard.Input"
                        />
                    </>
                }
            />
        ),
        [feedback, feedBackTitle, t],
    );


    const base = (
        <VStack align="center" gap="8" max>
            <ToggleFeatures feature="isRedesigned"
                off={
                    <TextDeprecated
                        title={starsCount ? t('Спасибо за оценку') : title || t('Поставьте оценку')}
                    />
                }
                on={
                    <Text
                        title={starsCount ? t('Спасибо за оценку') : title || t('Поставьте оценку')}
                    />
                }
            />
            <StarRating selected={starsCount} onSelect={onSelect} />
            {hasFeedback && (
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
                                <ToggleFeatures
                                    feature="isRedesigned"
                                    off={
                                        <HStack max gap="8" justify="end">
                                            <ButtonDeprecated onClick={onClose} theme={ButtonTheme.OUTLINE_RED}>
                                                {t('Закрыть')}
                                            </ButtonDeprecated>
                                            <ButtonDeprecated
                                                onClick={onAcceptHandler}
                                                data-testid="RatingCard.Button.Send"
                                            >
                                                {t('Отправить')}
                                            </ButtonDeprecated>
                                        </HStack>
                                    }
                                    on={
                                        <HStack max gap="8" justify="end">
                                            <Button onClick={onClose} variant='outline'>
                                                {t('Закрыть')}
                                            </Button>
                                            <Button
                                                onClick={onAcceptHandler}
                                                data-testid="RatingCard.Button.Send"
                                            >
                                                {t('Отправить')}
                                            </Button>
                                        </HStack>
                                    }
                                />
                            </VStack>
                        </Modal>
                    </BrowserView>
                    <MobileView>
                        <Drawer onClose={onClose} lazy isOpen={isOpenModal}>
                            <VStack>
                                {content}
                                <ToggleFeatures
                                    feature="isRedesigned"
                                    on={
                                        <ButtonDeprecated
                                            onClick={onAcceptHandler}
                                            fullWidth
                                            data-testid="RatingCard.Button.Send"
                                        >
                                            {t('Отправить')}
                                        </ButtonDeprecated>
                                    }
                                    off={
                                        <Button
                                            onClick={onAcceptHandler}
                                            fullWidth
                                            data-testid="RatingCard.Button.Send"
                                        >
                                            {t('Отправить')}
                                        </Button>
                                    }
                                />
                            </VStack>
                        </Drawer>
                    </MobileView>
                </>
            )}
        </VStack>
    )

    return (
        <ToggleFeatures feature="isRedesigned"
        off={
            <CardDeprecated className={classNames(cls.RatingCard, {}, [className])} data-testid="RatingCard">
                {base}
            </CardDeprecated>
        }
        on={
            <Card className={classNames(cls.RatingCard, {}, [className])}
                  data-testid="RatingCard"
                  fullWidth
                  borderForm='round'
                  padding="24"
            >
                {base}
            </Card>
        }
        />
    );
});
