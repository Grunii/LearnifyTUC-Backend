import React, { useCallback, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "./Sass/main.scss";
import "antd/dist/antd.min.css";
import { useAppDispatch } from "./redux/store/configureStore";
import { fetchBasketAsync } from "./redux/slice/basketSlice";
import { fetchCurrentUser } from "./redux/slice/userSlice";
import Navigation from "./Components/navigation";
import Homepage from "./Pages/Homepage";
import LoginPage from "./Pages/LoginPage";
import DetailPage from "./Pages/DetailPage";
import DescriptionPage from "./Pages/DescriptionPage";
import BasketPage from "./Pages/BasketPage";
import Loading from "./Components/Loading";
import CheckoutWrapper from "./Pages/CheckoutPage";
import PrivateRoute from "./Components/PrivateRoute";
import Dashboard from "./Pages/Dashborad";

import Categories from "./Components/Categories";
import CoursePage from "./Pages/CoursePage";
import InstructorPage from "./Pages/InstructorPage";
import CreateCourse from "./Pages/CreateCourse";
import { getCategoriesAsync } from "./redux/slice/categorySlice";
import SectionPage from "./Pages/SectionPage";
import CategoryPage from "./Pages/CategoryPage";

function App() {
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(true);

    const appInit = useCallback(async () => {
        try {
            await dispatch(fetchCurrentUser());
            await dispatch(fetchBasketAsync());
            await dispatch(getCategoriesAsync());
        } catch (error) {
            console.log(error);
        }
    }, [dispatch]);

    useEffect(() => {
        appInit().then(() => setLoading(false));
    }, [appInit]);

    if (loading) return <Loading />;

    return (
        <>
            <Navigation />
            <Categories />
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/course/:id" component={DescriptionPage} />
                <Route exact path="/basket" component={BasketPage} />
                <Route exact path="/category/:id" component={CategoryPage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/detail" component={DetailPage} />
                <PrivateRoute exact path="/profile" component={Dashboard} />
                <PrivateRoute
                    exact
                    path="/learn/:course/:lecture"
                    component={CoursePage}
                />
                <PrivateRoute
                    exact
                    path="/checkout"
                    component={CheckoutWrapper}
                />
                <PrivateRoute
                    exact
                    path="/instructor"
                    component={InstructorPage}
                />
                <PrivateRoute
                    exact
                    path="/instructor/course"
                    component={CreateCourse}
                />
                <PrivateRoute
                    exact
                    path="/:course/lectures"
                    component={SectionPage}
                />
            </Switch>
        </>
    );
}
export default App;
