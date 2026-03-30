import { useLocation } from "react-router-dom"
import "./productDetails.css"
import type { ProductI } from "../../interfaces/ProductI";
export const ProductDetails =  () =>  {
    const location = useLocation();
    const item = location.state as ProductI;

  return (
    <>
    <div className="details-product-wrapper">
      <div className="details-product-content">
        <div className=" md:w-[30%] border border-indigo-500 flex justify-center p-[3rem] rounded-sm">
            <img className="w-[15rem]" src={item.image} alt="product" />
        </div>

        <div className="details-right-wrapper">
            <div className="text-sky-400 text-[2rem]">{item.title}</div>
            <div className="m-[1rem] text-sky-300 opacity-40">{item.category}</div>
            <div className="m-[1rem] text-sky-300 opacity-90" >{item.description}</div>
            <div className="m-[1rem] text-yellow-300 opacity-90">{item.price}</div>
        </div>
      </div>
    </div>
    </>
  )
}
