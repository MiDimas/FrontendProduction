import React, {ReactElement} from "react";
import {AppRoutes} from "@/shared/const/router";
import {ScrollToolbar} from "@/widgets/ScrollToolbar";
import {useRouterChange} from "@/shared/lib/router/useRouterChange";

export function useAppToolbar () {
    const route = useRouterChange();

    const toolbarByAppRoute: Partial<Record<AppRoutes, ReactElement>> = {
        [AppRoutes.ARTICLE_DETAILS]: <ScrollToolbar idElementToScroll="mainPage" />,
        [AppRoutes.ARTICLES]: <ScrollToolbar idElementToScroll="mainVirtuoso" />,
    }

    return toolbarByAppRoute[route];
}