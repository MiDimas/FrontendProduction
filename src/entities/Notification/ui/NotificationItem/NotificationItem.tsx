import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card as CardDeprecated, CardTheme } from '@/shared/ui/deprecated/Card';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Card  } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';
import { Notification } from '../../model/types/notification';
import cls from './NotificationItem.module.scss';
import {ToggleFeatures} from "@/shared/lib/features";

interface NotificationItemProps {
    className?: string;
    item: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, item } = props;

    const content = (
        <ToggleFeatures feature='isRedesigned'
            off={
                <CardDeprecated
                    className={classNames(cls.NotificationItem, {}, [className])}
                    theme={CardTheme.OUTLINE}
                >
                    <TextDeprecated title={item.title} text={item.description} />
                </CardDeprecated>
            }
            on={
                <Card
                    className={classNames(cls.NotificationItem, {}, [className])}
                >
                    <Text title={item.title} text={item.description} />
                </Card>
            }
        />
    );
    if (item.href) {
        return (
            <a className={cls.link} target="_blank" href={item.href} rel="noreferrer">
                {content}
            </a>
        );
    }
    return content;
});
