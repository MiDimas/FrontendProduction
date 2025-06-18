import {matchPath, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {AppRouteByPathPattern, AppRoutes} from "@/shared/const/router";

export function useRouterChange () {
    const location = useLocation();
    const [route, setRoute] = useState<AppRoutes>(AppRoutes.MAIN);

    useEffect(() => {
        Object.entries(AppRouteByPathPattern).forEach(([pattern, route]) => {
            if(matchPath(pattern, location.pathname)){
                setRoute(route)
            }
        })
    }, [location.pathname]);

    return route;
}