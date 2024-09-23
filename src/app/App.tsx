import { useTheme } from "app/providers/ThemeProvider/index";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallBack } from "widgets/ErrorFallBack";
import { Modal } from "shared/ui/Modal";


export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

const App = () => {
    const { theme } = useTheme();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className={classNames('app', {}, [theme])}>
            <ErrorBoundary FallbackComponent={ErrorFallBack}>
                <Suspense fallback="">
                    <Navbar />
                    <button onClick={()=> {setIsOpen(true)}}>!!!</button>
                    <Modal isOpen={isOpen} onClose={() => {setIsOpen(false)}}>
                        TEST
                    </Modal>
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