import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/home_icon.svg';
import AboutIcon from 'shared/assets/icons/about_icon.svg';
import ProfileIcon from 'shared/assets/icons/profile_icon.svg';
import ArticlesIcon from 'shared/assets/icons/article_icon.svg';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(getUserAuthData, (authData) => {
    const sidebarItems: SidebarItemType[] = [
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
    ];

    if (authData) {
        sidebarItems.push(
            {
                path: `${RoutePath.profile}${authData.id}`,
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
        );
    }
    return sidebarItems;
});
