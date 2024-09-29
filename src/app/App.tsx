import { useTheme } from "app/providers/ThemeProvider/index";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallBack } from "widgets/ErrorFallBack";
import { useDispatch } from "react-redux";
import { userActions } from "entities/User";


export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(userActions.initAuthUser());
    }, [])

    return (
        <div className={classNames('app', {}, [theme])}>
            <ErrorBoundary FallbackComponent={ErrorFallBack}>
                <Suspense fallback="">
                    <Navbar />
                    <div className="content">
                        <Sidebar />
                        <AppRouter />
                    </div>
                </Suspense>
            </ErrorBoundary>

        </div>
    )
}

export default App;