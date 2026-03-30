import { createBrowserRouter } from "react-router-dom";
import LayoutC from "../LayoutC/LayoutC";
import Products from "../ProductsC/Products";
import { ProductDetails } from "../ProductsC/productDetails/productDetails";

export const routes = createBrowserRouter([
    {path:'/',element:<LayoutC/>,children:[
        {index:true,element:<Products/>},
        {path:'products',element:<Products/>},
        {path:'detailsProduct',element:<ProductDetails/>},
    ]}
])