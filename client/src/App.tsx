import { Route, Switch } from "react-router-dom";
import "antd/dist/antd.min.css";
import "./Sass/main.scss";
import DetailPage from "./Pages/DetailPage";
import Homepage from "./Pages/Homepage";
import LoginPage from "./Pages/LoginPage";
import Navigation from "./Components/navigation";
import Categories from "./Components/Categories";
import CategoryPage from "./Pages/CategoryPage";
import DescriptionPage from "./Pages//DescriptionPage";

function App() {
    return (
        <>
            <Navigation />
            <Route exact path="/" component={Categories} />
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/course/:id" component={DescriptionPage} />
                <Route exact path="/category/:id" component={CategoryPage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/detail" component={DetailPage} />
            </Switch>
        </>
    );
}

export default App;
