import { Provider } from "react-redux";
import store from "./store";
import { useEffect } from "react";
import { verifyUser } from "./features/user/userAsyncActions";

export default function StoreProvider({children}) {
    useEffect(() => {
        store.dispatch(verifyUser());
    }, []);
    return <Provider store={store}>{children}</Provider>
}