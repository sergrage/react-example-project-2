import { FC, SVGProps } from "react";
import { AppRoutes, RoutePath } from "shared/config/routeConfig/routeConfig";

import MainPageIcon from "shared/assets/icons/main-page.svg";
import AboutPageIcon from "shared/assets/icons/about-page.svg";
import ProfilePageIcon from "shared/assets/icons/profile-page.svg";

export interface SidebarItemType {
    path: typeof RoutePath[AppRoutes];
    text: string;
    icon?: FC<SVGProps<SVGSVGElement>>;
}

export const sidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        text: 'mainLink',
        icon: MainPageIcon
    },
    {
        path: RoutePath.about,
        text: 'aboutLink',
        icon: AboutPageIcon
    },
    {
        path: RoutePath.profile,
        text: 'profileLink',
        icon: ProfilePageIcon
    },
]