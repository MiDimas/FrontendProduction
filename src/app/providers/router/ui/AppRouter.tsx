import { Route, Routes } from 'react-router-dom';
import { memo, Suspense, useMemo } from 'react';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

const AppRouter = () => {
    const [t] = useTranslation();
    const isAuth = useSelector(getUserAuthData);
    const routes = useMemo(() => Object.values(routeConfig).filter((route) => {
        if (route.authOnly && !isAuth) {
            return false;
        }
        return true;
    }), [isAuth]);
    return (
        <Suspense fallback={(
            <PageLoader />
        )}
        >
            <Routes>
                {
                    routes.map(({ path, element }) => (
                        <Route
                            key={path}
                            path={path}
                            element={(
                                <div className="page_wrapper">
                                    {element}
                                </div>
                            )}
                        />
                    ))
                }
            </Routes>
        </Suspense>
    );
};

export default memo(AppRouter);
