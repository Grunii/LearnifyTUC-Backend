import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.min.css";
import "./Sass/main.scss";
import DetailPage from "./Pages/DetailPage";
import Homepage from "./Pages/Homepage";
import Login from "./Pages//LoginPage";
import Navigation from "./Components/navigation";
import Categories from "./Components/Categories";
import CategoryPage from "./Pages/CategoryPage";
import DescriptionPage from "./Pages//DescriptionPage";
import BasketPage from "./Pages/BasketPage";
import agent from "./actions/agent";
import { setBasket } from "./redux/slice/basketSlice";
import { useAppDispatch } from "./redux/store/configureStore";
import Dashboard from "./Pages/Dashborad";

function App() {
    const dispatch = useAppDispatch();

    function getCookie(name: string) {
        return (
            document.cookie
                .match("(^|;)\\s*" + name + "\\s*=\\s*([^;]+)")
                ?.pop() || ""
        );
    }

    useEffect(() => {
        const clientId = getCookie("clientId");
        if (clientId) {
            agent.Baskets.get()
                .then((basket) => dispatch(setBasket(basket)))
                .catch((error) => console.log(error));
        }
    }, [dispatch]);
    return (
        <>
            <Navigation />
            <Route exact path="/" component={Categories} />
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/course/:id" component={DescriptionPage} />
                <Route exact path="/basket" component={BasketPage} />
                <Route exact path="/category/:id" component={CategoryPage} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/detail" component={DetailPage} />
                <Route exact path="/profile" component={Dashboard} />
            </Switch>
        </>
    );
}

export default App;
