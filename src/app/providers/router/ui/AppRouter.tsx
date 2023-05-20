import {Route, Routes} from "react-router-dom";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {Suspense} from "react";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Идет загрузка...</div>}>
            <Routes>
                {
                    Object.values(routeConfig).map(({path, element}) => (
                        <Route key={path} path={path} element={(
                            <div className={"page_wrapper"}>
                                {element}
                            </div>
                        )} />
                    ))
                }
            </Routes>
        </Suspense>
    );
};

export default AppRouter;