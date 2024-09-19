import {lazy} from "react";
// export const MainPageAsync = lazy(() => new Promise((resolve) => {
//     // @ts-ignore
//     // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!!
//     setTimeout(() => resolve(import('./MainPage')), 1000);
// }))

export const MainPageAsync = lazy(() => import('./MainPage'));
