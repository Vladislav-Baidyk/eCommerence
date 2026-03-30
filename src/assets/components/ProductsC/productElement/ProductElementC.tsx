import { Link } from "react-router-dom"
import type { ProductI } from "../../interfaces/ProductI"
import "./productElement.css"
import type { FC } from "react"

type ItemT = {
    item:ProductI
}
export const ProductElementC:FC<ItemT> = ({item}) =>  {
  return (
    <>
        <div className="item-container" >
            <div className="item-content">
            <img src={item.image} alt="item" className="item-image" />
            <div className="item-text">
            <div className="item-header">{item.title.slice(0,20)}...</div>
            <div className="item-category">{item.category}</div>
            <div className="item-price">{item.price}</div>
            </div>
            <Link className="item-details-link" to ={'/detailsProduct'} state={item}>See Details</Link>
            </div>
        </div>
    </>
  )
}
