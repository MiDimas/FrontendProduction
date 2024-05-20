import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { getUserAuthData, getUserRoles, UserRole } from '@/entities/User';

import { RoutePath } from '@/shared/const/router';

interface RequireAuthProps {
    children: JSX.Element;
    roles?: UserRole[];
}

export function RequireAuth({ children, roles }: RequireAuthProps) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();
    const userRoles = useSelector(getUserRoles);
    const hasRequireRoles = useMemo(() => {
        if (!roles) {
            return true;
        }
        return roles.some((value) => userRoles?.includes(value));
    }, [roles, userRoles]);

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }

    if (!hasRequireRoles) {
        return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />;
    }

    return children;
}
