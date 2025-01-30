import React, { useContext } from 'react'
import { use } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'

const Product = () => {
    const productId = useParams();
    const { products, currency } = useContext(ShopContext)
    const [product, setProduct] = useState(null)
    const [img, setImg] = useState("")
    const [color, setColor] = useState("")
    return (
        <div>
            <div>
                {/* PRODUCTS DATA  */}
                <div>
                    {/* IMAGE  */}
                    <div>
                        <div>
                            {
                                products.image.map((img, index) => (
                                    <img key={index} src={img} alt="productImg" className='transition-all duration-300' />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
