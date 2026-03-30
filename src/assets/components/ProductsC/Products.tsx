import { useEffect, useState } from "react"
import { GetAll } from "../services/serviceFetch";
import type { ProductI } from "../interfaces/ProductI";
import { useOutletContext } from "react-router-dom";
import "./Products.css";
import { ProductElementC } from "./productElement/productElementC";
export default function Products() {
    const [items,setItems] = useState<ProductI[] | []>([]);
    const searchQuery:string = useOutletContext<string>();

    useEffect(() => {
        GetAll()
            .then(data => setItems(data))
    },
    [])

    const filteredItems:ProductI[] = items.filter((item) => {
  if (searchQuery.length < 3) {
    return true;
  }
  return item.title.toLowerCase().includes(searchQuery.toLowerCase());
    })
  return (
    <>
    {filteredItems.length >0 ?
     (    
      <div className="items-grid">
            {filteredItems.map((item:ProductI)=> {
              return <ProductElementC key = {item.id} item={item}/>
            })}
      </div>
)
     : 
     (
      <div className="not-found-text">
        Sorry the item you want to find is not here
      </div>
     )}
    </>
  )
}
