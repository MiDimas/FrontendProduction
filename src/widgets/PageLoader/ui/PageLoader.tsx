import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/Loader';
import { HStack } from '@/shared/ui/Stack';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = memo(({ className }: PageLoaderProps) => (
    <HStack
        justify="center"
        align="center"
        max
        className={classNames(cls.PageLoader, {}, [className])}
    >
        <Loader />
    </HStack>
));
