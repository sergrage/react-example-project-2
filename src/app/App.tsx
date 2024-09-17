import { Link } from "react-router-dom";

// import classes from "./App.module.scss";

import "./styles/index.scss";

import { useTheme } from "app/providers/ThemeProvider/index";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className="content">
                <Sidebar />
                <AppRouter />   
            </div>

        </div>


    )
}

export default App;