import { Route } from "react-router-dom";
import Product from "./components/templateProduct.jsx";
import App from "./App.jsx"
const Routes = () => {
    console.log("llega");
    return (
        <Routes>
            <Route path="/products/:productId" component={Product} />
            <Route path="/" component={App}/>
        </Routes>
    );
};

export default Routes;