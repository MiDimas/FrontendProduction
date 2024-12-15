import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import AboutIconDeprecated from '@/shared/assets/icons/about_icon.svg';
import AboutIcon from '@/shared/assets/icons/Info.svg';
import ArticlesIconDeprecated from '@/shared/assets/icons/article_icon.svg';
import ArticlesIcon from '@/shared/assets/icons/Article.svg';
import MainIconDeprecated from '@/shared/assets/icons/home_icon.svg';
import MainIcon from '@/shared/assets/icons/Home.svg';
import ProfileIconDeprecated from '@/shared/assets/icons/profile_icon.svg';
import ProfileIcon from '@/shared/assets/icons/Avatar.svg';
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/router';
import { SidebarItemType } from '../types/sidebar';
import {toggleFeatures} from "@/shared/lib/features";


export const getSidebarItems = createSelector(getUserAuthData, (authData) => {
    const sidebarItems: SidebarItemType[] = [
        {
            path: getRouteMain(),
            Icon: toggleFeatures({
                    name: "isRedesigned",
                    off: () => MainIconDeprecated,
                    on: () => MainIcon,
                }),
            text: 'Главная',
        },
        {
            path: getRouteAbout(),
            Icon: toggleFeatures({
                name: 'isRedesigned',
                off: () => AboutIconDeprecated,
                on: () => AboutIcon,
            }),
            text: 'О нас',
        },
    ];

    if (authData) {
        sidebarItems.push(
            {
                path: getRouteProfile(authData.id),
                Icon: toggleFeatures({
                    name: 'isRedesigned',
                    off: () => ProfileIconDeprecated,
                    on: () => ProfileIcon,
                }),
                text: 'Профиль',
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                Icon: toggleFeatures({
                    name: 'isRedesigned',
                    off: () => ArticlesIconDeprecated,
                    on: () => ArticlesIcon,
                }),
                text: 'Статьи',
                authOnly: true,
            },
        );
    }
    return sidebarItems;
});
