import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { userRoutes } from "./routes";
import { PrivateRouter } from "./routes/privateRoutes";
import { LoginContainer } from "./container/LoginContainer";
import "!style-loader!css-loader!react-toastify/dist/ReactToastify.css"
import './styles/global.scss';

export const App = () => {
    return <>
        <ToastContainer />
        <Router history={History}>
            <Routes>
                <Route>
                    {userRoutes.map(({ path, component, access }) => (
                        <Route
                            key={Math.random()}
                            path={path}
                            element={<PrivateRouter
                                exact
                                Component={component}
                                path={path}
                                access={access}
                            />}
                        />
                    ))}
                </Route>
                <Route path="/authentication/login" element={<LoginContainer />} />
            </Routes>
        </Router>
    </>
}