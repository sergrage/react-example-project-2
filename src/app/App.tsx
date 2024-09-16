import { Link, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
// import classes from "./App.module.scss";

import "./styles/index.scss";

import  {MainPage} from "pages/MainPage/index";
import  {AboutPage} from "pages/AboutPage/index";

import { useTheme } from "app/providers/ThemeProvider/index";
import { classNames } from "shared/lib/classNames/classNames";

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>theme</button>
            <Link to="/">Main</Link>
            <Link to="/about">About</Link>
            <Suspense fallback={<div>Loading</div>}>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </Suspense>
        </div>


    )
}

export default App;