import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import MainIcon from '@/shared/assets/icons/home_icon.svg';
import AboutIcon from '@/shared/assets/icons/about_icon.svg';
import ProfileIcon from '@/shared/assets/icons/profile_icon.svg';
import ArticlesIcon from '@/shared/assets/icons/article_icon.svg';
import { SidebarItemType } from '../types/sidebar';
import {
    getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile,
} from '@/shared/const/router';

export const getSidebarItems = createSelector(getUserAuthData, (authData) => {
    const sidebarItems: SidebarItemType[] = [
        {
            path: getRouteMain(),
            Icon: MainIcon,
            text: 'Главная',
        },
        {
            path: getRouteAbout(),
            Icon: AboutIcon,
            text: 'О нас',
        },
    ];

    if (authData) {
        sidebarItems.push(
            {
                path: getRouteProfile(authData.id),
                Icon: ProfileIcon,
                text: 'Профиль',
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                Icon: ArticlesIcon,
                text: 'Статьи',
                authOnly: true,
            },
        );
    }
    return sidebarItems;
});
