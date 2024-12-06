import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { HStack } from '@/shared/ui/deprecated/Stack';
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
