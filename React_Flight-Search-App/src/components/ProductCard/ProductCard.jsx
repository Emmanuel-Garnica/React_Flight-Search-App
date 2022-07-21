import { Link } from "react-router-dom"

export const ProductCard = ({ id, title, price, image, description, category }) => {
    return(
        <div>
            <h2>
                <Link to={`/product/${id}`}>
                    {title}
                </Link>
            </h2>
            <img className="max-w-[250px] max-h-[250px]" src={image} alt="Imagen de producto" />
            {description&&<p>{description}</p>}
            <p>Price: {price}</p>
            <p>Category: {category}</p>
        </div>
    )
}