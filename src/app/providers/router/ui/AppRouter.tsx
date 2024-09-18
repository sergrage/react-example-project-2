import { Suspense } from "react"
import { Route, Routes } from "react-router-dom";
import { RouteConfig } from "shared/config/routeConfig/routeConfig";
import { Loader } from "shared/ui/Loader";

const AppRouter = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                {Object.values(RouteConfig).map(({path, element}) => (
                    <Route key={path} path={path} element={(
                        <div className="page-wrapper">{element}</div>   
                    )}/>    
                ))}
            </Routes>
        </Suspense>
    )
};

export {AppRouter};
