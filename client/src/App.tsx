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
// import ContactPage from "./contact/ContactPage";
import CategoryPage from "./Pages/CategoryPage";
import DescriptionPage from "./Pages//DescriptionPage";
import BasketPage from "./Pages/BasketPage";
import { useStoreContext } from "./context/StoreContext";
import agent from "./actions/agent";

function App() {
    const { setBasket } = useStoreContext();

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
                .then((basket) => setBasket(basket))
                .catch((error) => console.log(error));
        }
    }, [setBasket]);
    return (
        <>
            <Navigation />
            <Route exact path="/" component={Categories} />
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/course/:id" component={DescriptionPage} />
                {/* <Route exact path="/contact" component={ContactPage} /> */}
                <Route exact path="/basket" component={BasketPage} />
                <Route exact path="/category/:id" component={CategoryPage} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/detail" component={DetailPage} />
            </Switch>
        </>
    );
}

export default App;
