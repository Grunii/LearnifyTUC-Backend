import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./Sass/main.scss";
import App from "./App";
import { StoreProvider } from "./context/StoreContext";
import { Provider } from "react-redux";
import { store } from "./redux/store/configureStore";

ReactDOM.render(
    <Router>
        <StoreProvider>
            <Provider store={store}>
                <App />
            </Provider>
        </StoreProvider>
    </Router>,
    document.getElementById("root")
);
