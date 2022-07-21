
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ProductCard } from '../ProductCard/ProductCard';

export const Products = ()=>{
    const[products, setProducts] = useState([])

    useEffect(() => {
      axios.get('https://fakestoreapi.com/products').then((result) => {
        setProducts(result.data)
      })
    })

    return(
        <div className="App flex flex-col justify-center min-w-screen min-h-screen bg-[url(./assets/images/img-searcher-bgImage-2022.jpg)] bg-center bg-cover">
  
            <h1>Lista de productos</h1>
            {products && products.map((product)=>{
            return(
                <ProductCard 
                    key={product.id}
                    id={product.id}
                    title={product.title} 
                    price={product.price}
                    image={product.image}
                    description={product.description}
                    category={product.category}
                />
            )
            })
    
        }
      </div>
    )
}