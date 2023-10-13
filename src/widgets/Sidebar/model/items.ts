import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/home_icon.svg';
import AboutIcon from 'shared/assets/icons/about_icon.svg';
import ProfileIcon from 'shared/assets/icons/profile_icon.svg';
import ArticlesIcon from 'shared/assets/icons/article_icon.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SidebarItemList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'Главная',
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'О нас',
    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: 'Профиль',
        authOnly: true,
    },
    {
        path: RoutePath.articles,
        Icon: ArticlesIcon,
        text: 'Статьи',
        authOnly: true,
    },

];
