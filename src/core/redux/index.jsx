import { Provider } from "react-redux";
import { store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./setup/persist";

export const ReduxProvider = ({ children }) => {
  return <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            {children}
        </PersistGate>
    </Provider>
}
