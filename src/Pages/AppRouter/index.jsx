import { Route, Routes } from "react-router";

import HomePage from "../HomePage";
import Layout from '../Layout';

const AppRouter = () => {
    return (
        <div className="AppRouter">
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                </Route>
            </Routes>
        </div>
    )
}

export default AppRouter;

