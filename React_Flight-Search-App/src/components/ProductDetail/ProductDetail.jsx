import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { ProductCard } from "../ProductCard/ProductCard"

export const ProductDetail = ()=>{
    let { id } = useParams()
    const [product, setProduct] = useState({})
    
    useEffect(()=> {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((result)=> {
            setProduct(result.data)
        })
    }, [])
    
    return(
        <div>
            <h1 className="text-red-500">Información del producto con identificador {id}</h1>
            {product && 
                <ProductCard
                    id={product.id}
                    title={product.title}
                    image={product.image}
                    price={product.price}
                    description={product.description}
                    category={product.category}
                />
            }
        </div>
    )
}