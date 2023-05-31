import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { userRoutes } from "./routes";
import { PrivateRouter } from "./routes/privateRoutes";
import { LoginContainer } from "./container/LoginContainer";
import './styles/global.scss';

export const App = () => {
    return <>
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