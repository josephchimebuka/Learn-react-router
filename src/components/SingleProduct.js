import React from 'react'
import {useParams,Link} from "react-router-dom"
import products from '../data';

const SingleProduct = () => {
  const {productId} = useParams();
  const product = products.find((product)=> product.id=== productId);

 const {name, image} = product;
  return (
    <div>
      <section >
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <Link to='/products'>Back home</Link>
      </section>
    </div>
  )
}

export default SingleProduct
