import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";
import agent from "../actions/agent";
import Checkout from "../Components/Checkout";
import { setBasket } from "../redux/slice/basketSlice";
import { useAppDispatch } from "../redux/store/configureStore";

const stripePromise = loadStripe(
    "pk_test_51LmDhcBdXB57nezspj4T6byfPtOTCSPyHii4Ny1tz0EylXodQ3JSuMopCHhLHt18f7rUBRYMg51RZKDUvu62PEU800orcAtAyc"
);

export default function CheckoutWrapper() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        agent.Payments.paymentIntent()
            .then((basket) => dispatch(setBasket(basket)))
            .catch((error) => console.log(error));
    }, [dispatch]);

    return (
        <Elements stripe={stripePromise}>
            <Checkout />
        </Elements>
    );
}
