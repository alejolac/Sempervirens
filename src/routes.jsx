import { Route } from "react-router-dom";
import Product from "./components/templateProduct.jsx";

const Routes = () => {
    console.log("llega");
    return (
        <Routes>
            <Route path="/products/:productId" component={Product} />
        </Routes>
    );
};

export default Routes;