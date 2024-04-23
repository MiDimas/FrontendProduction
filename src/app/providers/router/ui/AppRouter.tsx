import { Route, Routes } from 'react-router-dom';
import { memo, Suspense, useCallback } from 'react';
import { AppRoutesProps, routeConfig } from '@/shared/config/routeConfig/routeConfig';
import { PageLoader } from '@/widgets/PageLoader/ui/PageLoader';
import { RequireAuth } from '@/app/providers/router/ui/RequireAuth';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                {route.element}
            </Suspense>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={(route.authOnly || route.roles)
                    ? <RequireAuth roles={route.roles}>{element}</RequireAuth>
                    : element}
            />
        );
    }, []);
    return (
        <Suspense fallback={(
            <PageLoader />
        )}
        >
            <Routes>
                {Object.values(routeConfig).map((route) => (
                    renderWithWrapper(route)
                ))}
            </Routes>
        </Suspense>
    );
};

export default memo(AppRouter);
