import ReactDOM from 'react-dom/client'
import { HashRouter } from "react-router-dom";
import './index.css'
import {Suspense} from "react";
import {lazyMinLoadTime} from "@/Core/Utils/LazyLoadTime.tsx";
import AppLoader from "@/Core/Components/Loaders/AppLoader";
import {Provider} from "react-redux";
import store from "@/Core/Store";

const App = lazyMinLoadTime(() => import("./App"), 3200);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <HashRouter>
        <Provider store={store}>
        <Suspense fallback={<AppLoader />}>
            <App />
        </Suspense>
        </Provider>
    </HashRouter>
)
